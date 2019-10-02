import React, {Component,Suspense} from 'react';
import { LanguageContext, languages } from '../components/Language/LanguageContext';


let RouterEvent = null;

function Emptydiv(){
    return <div></div>
}

export class Router extends Component{
    constructor(props){
        super(props);
        RouterEvent = this.changeRoute.bind(this);
        this.state = {
            actualComponent:null,
            lastComponent:props.loadingComponent || Emptydiv,
            languages: languages.spanish
        };
        this.changeRoute = this.changeRoute.bind(this);  
    }

    componentDidMount(){
        this.changeRoute();
        window.onpopstate = this.changeRoute.bind(this);
    }

    toggleLanguage = () => {
        this.setState(state => ({
            languages:
                state.languages === languages.spanish
                    ? languages.english
                    : languages.spanish
        }));
        this.forceUpdate()
    };

    async changeRoute(){
        let pathURL = location.hash;
        pathURL = pathURL.substr(2);
        if(this.props.transferpath){
            pathURL = this.props.transferpath;
        }

        if(!this.props.routes || !Array.isArray(this.props.routes)){
            return;
        }
        let routers = getRoutes(this.props.routes);
        
        let params = {};
        let actual = null;
        actual = routers.find(r=>{
            let parameters = r.path.match(/(\:([A-z]+)\/?)/g);
            let url = r.path.replace(/(\:([A-z]+)(\/?))/g,'([\\w\-]+)$3')
            url = url.replace(/\//g,"\\/");
            if(new RegExp(`^${url}$`).test(pathURL)){
                let parametersVals = (new RegExp(`^${url}$`,'g')).exec(pathURL);
                if(parameters){
                    parameters.forEach((e,i)=>{
                        params[e.replace(/(\/|\:)/g,"")] = parametersVals[i+1];
                    })
                }
                return true;
            }
            return false;
        })
        if(actual && actual.guard){
            if(Array.isArray(actual.guard)){
                
                for(let i =0; i<actual.guard.length;i++){
                    if(!await actual.guard[i]()){
                        if(this.props.guardFalse){
                            actual = {component:this.props.guardFalse};
                            params.__guardfalse__ = true;
                            params.__pathguard__ = `/${pathURL}`;
                        }else{
                            actual = null;
                        }
                        break;
                    }
                }
            }else if(typeof actual.guard === "function"){
                if(!await actual.guard()){
                    if(this.props.guardFalse){
                        actual = {component:this.props.guardFalse};
                        params.__guardfalse__ = true;
                        params.__pathguard__ = `/${pathURL}`;
                    }else{
                        actual = null;
                    }
                }
            }
        }
        let loadingComponent = this.props.loadingComponent && React.createElement(this.props.loadingComponent);
        if(actual){
            this.setState({
                lastComponent:loadingComponent || this.state.actualComponent || this.state.lastComponent,
                actualComponent:React.createElement(actual.component,{navigation:{
                    state:history.state,
                    params,
                    navigate,
                    goBack,
                    push,
                    toggleLanguage: this.toggleLanguage
                }})
            })
        }else if(this.props.notFound){
            this.setState({
                lastComponent:loadingComponent || this.state.actualComponent || this.state.lastComponent,
                actualComponent:React.createElement(this.props.notFound,{navigation:{
                    state:history.state,
                    params,
                    navigate,
                    goBack,
                    push,
                    toggleLanguage: this.toggleLanguage
                }})
            })
        }else{
            this.setState({
                lastComponent:loadingComponent || this.state.actualComponent || this.state.lastComponent,
                actualComponent:null
            })
        }
        actual = null;
    }

    render(){
        return (<div>
            <Suspense fallback={<Emptydiv/>}> {/* Error loading component */}
                <LanguageContext.Provider value={this.state.languages}>
                    {this.state.actualComponent}
                </LanguageContext.Provider>
            </Suspense>
        </div>);
    }
}

function getRoutes(routers,path="",guards=[]){
    let r = [];
    routers = deepClone(routers);
    routers.forEach(e=>{
        if(path){
            path = path.endsWith("/")?path:path+"/";
            e.path = path + e.path;
        }
        if(guards){
            e.guard = [...(e.guard||[]),...guards];
        }
        if(e.component){
            r.push(e);
        }
        if(e.routes && Array.isArray(e.routes)){
            let subRoutes = getRoutes(e.routes,e.path,e.guard);
            r = [...r,...subRoutes]
        }
    })
    return r;
}

function deepClone(obj){
    let clone = null;
    if(Array.isArray(obj)){
        clone = [];
        for(let k in obj){
            if(obj.hasOwnProperty(k)){
                clone.push(deepClone(obj[k]));
            }
        }
    }else if (typeof obj == "object"){
        clone = {};
        for(let k in obj){
            if(obj.hasOwnProperty(k)){
                clone[k] = deepClone(obj[k]);
            }
        }
    }else{
        return obj;
    }

    return clone;
}

export function navigate(to,options={}){
    if(!to) return;
    if(options.replace){
        history.replaceState(options.state,"",`/#${to}`);
    }else{
        push(to,options)
    }
    
    if(RouterEvent){
        RouterEvent()
    }
}
function push(to,options = {}){
    history.pushState(options.state,"",`/#${to}`);
}

export function goBack(){
    history.back();
}

export function Link(props){
    let {to, children, onClick, ...prop} = props;
    return (<a onClick={_=>{if(onClick)onClick(_);navigate(to);}} style={{cursor:"pointer"}} {...prop}>{children}</a>)
}