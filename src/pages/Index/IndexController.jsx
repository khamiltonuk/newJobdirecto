import React, { Component } from "react";
import style from './IndexController.scss';
import { BodyComponent } from "../../components/Body/BodyComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { SlideComponent } from "../../components/Slide/SlideComponent";
import { AboutComponent } from "../../components/About/AboutComponent";
import { BusinessComponent } from "../../components/Business/BusinessComponent";
import { GastroComponent } from "../../components/Gastro/GastroComponent";
import { ThumbnailComponent } from "../../components/Thumbnail/ThumbnailComponent";
import Animate, {Div} from "../../utils/animate";

export default class IndexController extends Component {

    constructor(props){
        super(props);
        this.animate = new Animate([
            {transform:"scale(1)"}
        ]);
    }

    componentDidMount(){
        this.animate.setOptions({
            duration:5000,
            fill:"both"
        });
        this.animate.addFrame({
            transform:"scale(5)",
        })
        
    }
    render() {
        
        return (
            <BodyComponent>
                <div className={style.content}>
                    <SlideComponent />
                    <AboutComponent />
                    <BusinessComponent />
                    {/* <Div animate={this.animate} onMouseEnter={_=>this.animate.run()} onMouseLeave={_=>this.animate.pause()} style={{minHeight:"100px",minWidth:"100px",backgroundColor:"#888"}} /> */}
                </div>
            </BodyComponent>
        )
    }
}
