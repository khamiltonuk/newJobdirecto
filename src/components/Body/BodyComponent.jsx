import React, { Component } from "react";
import style from './BodyComponent.scss';
import { NavComponent } from "../Nav/NavComponent";


export function BodyComponent(props){
    let {children, ...attrs} = props;
    return (<div className={style.Body} {...attrs}>
        <NavComponent />
        {children}
    </div>)
}