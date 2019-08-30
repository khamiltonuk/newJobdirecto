const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const TerserPlugin = require('terser-webpack-plugin');
const exec = require('child_process').exec;
const fs = require('fs');


let entryPoints = {
    index: './src/app.jsx',
}

let split = {};

Object.keys(entryPoints).forEach(e => {
    split[e] = {
        test: new RegExp(`${e}\\.(css|sass|scss)$`),
        name: e,
        chunks: 'all',
        minChunks: 2,
    }
})
//new ExtractTextWebpackPlugin("[name].css"),

const config = {
    mode: 'none',
    entry: entryPoints,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { minimize: true, } },
                    //"style-loader", // creates style nodes from JS strings
                    { loader: 'css-loader', options: { modules: true, sourceMap: true, importLoaders: 1 } },
                    {
                        loader: "postcss-loader", options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/',
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        host: "0.0.0.0",
        port: 6543,
        proxy: { //config proxy for work with backend
            '/api.....': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                ...split,
                commons: {
                    test: /\.(js|jsx)$/,
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    priority: -20,
                },
                commonscss: {
                    test: /\.(css|sass|scss)$/,
                    name: 'commonscss',
                    chunks: 'all',
                    minChunks: 2,
                    priority: -21,
                },
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[chunkhash].css",
            chunkFilename: "[chunkhash].css",
            orderWarning: false,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new CleanWebpackPlugin(),
    ].concat(
        Object.keys(entryPoints).map(function (id) {
            return new HtmlWebpackPlugin({
                chunks: ["common", id],
                filename: `${id}.html`,
                inject: "body",
                template: './src/templates/template.html',
            })
        })
    ),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: 'assets/js/[name][chunkhash].bundle.js',
        chunkFilename: '[name][chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

if (process.env.mode === "prod") {
    config.mode = "production";
    config.devtool = 'none';
    config.optimization.minimizer = [new TerserPlugin({ /* additional options here */ })];
    /*config.optimization = {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: true,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
            }
        })],
    },*/
    config.plugins = config.plugins.concat([
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: true,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
            }
        }),
        {
            apply: (compiler) => {
                compiler.hooks.beforeRun.tap('BeforeEmitPlugin', (compilation) => {
                    let files = fs.readdirSync(path.resolve('src','environment'));
                    
                    files.forEach(e=>{
                        if(!e.endsWith(".prod.jsx")){
                            fs.copyFileSync(path.resolve('src','environment',e),path.resolve('src','environment',e.replace(".jsx",".tmp")));
                            fs.unlinkSync(path.resolve('src','environment',e));
                            fs.copyFileSync(path.resolve('src','environment',e.replace(".jsx",".prod.jsx")),path.resolve('src','environment',e));
                        }
                    })
                });
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    let files = fs.readdirSync(path.resolve('src','environment'));
                    
                    files.forEach(e=>{
                        if(e.endsWith(".tmp")){
                            fs.unlinkSync(path.resolve('src','environment',e.replace(".tmp",".jsx")));
                            fs.copyFileSync(path.resolve('src','environment',e),path.resolve('src','environment',e.replace(".tmp",".jsx")));
                            fs.unlinkSync(path.resolve('src','environment',e));
                        }
                    })
                });
            }
        },
    ]
    )
}
module.exports = config;