import React, { Component } from "react";
import style from './IndexController.scss';
import { BodyComponent } from "../../components/Body/BodyComponent";
import language  from '../../languages/es.json';

export default class IndexController extends Component {

    constructor(props){
        super(props);
        console.log(language);
    }
    render() {
        
        return (
            <BodyComponent>
                <div className={style.content}>
                    texto de prueba
                </div>
            </BodyComponent>
        )
    }
}
