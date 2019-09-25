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
                {children}
            
            </div>)
    }
}