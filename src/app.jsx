import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "./utils/router";


const IndexController = React.lazy(_=>import("./pages/Index/IndexController"));

let routes = [
    {path:"", component:IndexController},
]

ReactDOM.render(<Router routes={routes}  />, document.querySelector("#app"));