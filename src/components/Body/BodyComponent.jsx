import React, { Component } from "react";
import style from './BodyComponent.scss';
import { LanguageContext, languages } from "../Language/LanguageContext";
import LanguageButton from "../LanguageButton/LanguageButton";


export class BodyComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            languages: languages.spanish
        };    
    }

    componentDidMount(){
        //this.props.toggleLanguage();
    }

    render(){
        let {children, ...attrs} = this.props;
        
        return (<div>
            
            <LanguageButton changeLanguage={this.props.toggleLanguage} />
            <h1 id="title" className="heading-1">
                JobDirecto
                        <br />
                <span className="heading-1">{this.context.main.title}</span>
            </h1>
                {children}
            
            </div>)
    }
}

BodyComponent.contextType = LanguageContext;