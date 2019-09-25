const fs = require('fs');
const { execSync, spawn } = require('child_process');
const deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteFolderRecursive("node_modules");
if(fs.existsSync("./package-lock.json")){
    fs.unlinkSync("./package-lock.json");
}
let ls = spawn('npm', ['install'], { cwd: "./", stdio: [process.stdin, process.stdout, process.stderr] });
ls.on('exit', function (code) {
    if (code == 0) {
        console.log(`Update Finished`);
    }
});