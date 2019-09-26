import React from "react";
import axios from "axios";
import { LanguageContext } from "../../components/Language/LanguageContext.jsx";
import StripeButton from "../../components/StripeButton/StripeButton.jsx";



export default class PrePayJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.cancelUrgency = this.cancelUrgency.bind(this);
        // this.wantsToPay = this.wantsToPay.bind(this);
    }

    componentDidMount(){
        axios.post("/publishJob", {jobData:{data:{...this.props.navigation.state,active:false,urgent:false}}}).then(resp => {
            if (resp.data.success) {
                axios.post("/createTransaction");
            }
        });
    }

    cancelUrgency(event) {
        event.preventDefault();
        axios.post("/cancelUrgency").then(resp => {
            this.props.navigation.navigate("/JobConfirm");
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading-1">{this.context.jobPayPage.title}</h1>
                <img className="prePayPics" src="topPost.png" alt="" />
                <p className="text">
                    {this.context.jobPayPage.text1} <br />
                    <br />
                    {this.context.jobPayPage.text2}
                    <br />
                    <br />
                </p>
                <div id="urgentCheckedButtons">
                    <StripeButton />
                    <br />
                    <button
                        onClick={this.cancelUrgency}
                        className="buttonBasic buttonOpaque"
                    >
                        {this.context.jobPayPage.buttonNO}
                    </button>
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </div>
            </div>
        );
    }
}

PrePayJob.contextType = LanguageContext;