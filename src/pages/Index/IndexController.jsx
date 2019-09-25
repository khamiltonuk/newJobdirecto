import React, { Component } from "react";
import style from './IndexController.scss';
import { BodyComponent } from "../../components/Body/BodyComponent";

export default class IndexController extends Component {

    constructor(props){
        super(props);
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
