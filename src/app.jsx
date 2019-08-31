import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "./utils/router";


const IndexController = React.lazy(_=>import("./pages/Index/IndexController"));
const JobsController = React.lazy(_=>import("./pages/Jobs/JobsController"));

let routes = [
    {path:"", component:IndexController},
    {path:"Jobs",component:JobsController}
]

ReactDOM.render(<Router routes={routes}  />, document.querySelector("#app"));