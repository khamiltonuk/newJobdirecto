import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton2 from "./stripebutton2.js";
import { LanguageContext } from "./languageContext";


export default class PrePay2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cancelPay = this.cancelPay.bind(this);
    // this.wantsToPay = this.wantsToPay.bind(this);
  }

  cancelPay(event) {
    console.log("someone does not want to pay");
    event.preventDefault();
    axios.post("/cancelPay").then(resp => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        {/*<img id="urgentExample" src="personpay.png" />
         */}{" "}
        <p className="text">
        {this.context.prePay2.text1}

          <br />
          <br />
          <span className="textHighlight">
          {this.context.prePay2.text2}

          </span>{" "}
          {this.context.prePay2.text3}
           <br />
          <br />
          <br />
        </p>
        <div className="personPayButtons">
        <StripeButton2/>
          <button
            onClick={this.cancelPay}
            className="buttonBasic buttonOpaque"
          >
            {this.context.prePay2.button}
          </button>
          <div className="contactInfo"><p>{this.context.contactInfo.contactInfo}</p></div>

        </div>
      </div>
    );
  }
}

PrePay2.contextType = LanguageContext;
