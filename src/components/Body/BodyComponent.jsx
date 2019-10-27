import React, { Component } from "react";
import style from './BodyComponent.scss';
import { LanguageContext, languages } from "../Language/LanguageContext";
import LanguageButton from "../LanguageButton/LanguageButton";
import Axios from "axios";


export class BodyComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            languages: languages.spanish,
            country:{}
        };    
    }

    componentDidMount(){
        //this.props.toggleLanguage();
        Axios({
            method: 'get',
            url: '/getCountry',
            params: {},
            withCredentials: true
        }).then(result => {
            
            this.setState({
                country:result.data.data[0],
            });
            
        });
    }

    render(){
        let {children, ...attrs} = this.props;
        
        return (<div>
            
            <LanguageButton changeLanguage={this.props.toggleLanguage} />
            <h1 id="title" className="heading-1">
                JobDirecto
                        <br />
                <span className="heading-1">{this.context.main.title.replace("%namearea%",this.state.country.name)}</span>
            </h1>
                {children}
            
            </div>)
    }
}

BodyComponent.contextType = LanguageContext;