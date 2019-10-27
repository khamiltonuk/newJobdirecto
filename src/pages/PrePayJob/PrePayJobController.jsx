import React from "react";
import axios from "axios";
import { LanguageContext } from "../../components/Language/LanguageContext.jsx";
import StripeButton from "../../components/StripeButton/StripeButton.jsx";
import { BodyComponent } from "../../components/Body/BodyComponent.jsx";



export default class PrePayJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionId:null,
        };
        this.cancelUrgency = this.cancelUrgency.bind(this);
        // this.wantsToPay = this.wantsToPay.bind(this);
    }

    componentDidMount(){
        axios.post("/publishJob", {jobData:{data:{...this.props.navigation.state,active:false,urgent:true}}}).then(resp => {
            if (resp.data.success) {
                axios.post("/createJobTransaction",{id:resp.data.response}).then(r=>{
                    this.setState({
                        transactionId:r.data.r
                    })
                });
            }
        });
    }

    cancelUrgency(event) {
        event.preventDefault();
        axios.post("/cancelUrgency",{id:this.state.transactionId}).then(resp => {
            let { state } = this.props.navigation;
            state.urgent = false
            this.props.navigation.navigate("/JobConfirm",{state:state});
        });
    }

    render() {
        return (
            <BodyComponent toggleLanguage={this.props.navigation.toggleLanguage}>
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
                    <StripeButton transactionId={this.state.transactionId} />
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
            </BodyComponent>
        );
    }
}

PrePayJob.contextType = LanguageContext;
