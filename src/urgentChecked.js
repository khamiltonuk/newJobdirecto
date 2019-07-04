import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton from "./stripebutton.js";
import { LanguageContext } from "./languageContext";

export default class UrgentChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cancelUrgency = this.cancelUrgency.bind(this);
    // this.wantsToPay = this.wantsToPay.bind(this);
  }

  cancelUrgency(event) {
    console.log("someone does not want to pay");
    event.preventDefault();
    axios.post("/cancelUrgency").then(resp => {
      this.props.history.push("/jobConfirm");
    });
  }

  render() {
    return (
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle" className="heading-1">
          {this.context.jobPayPage.title}
        </h1>
        <img id="urgentExample" src="urgentExample.png" />
        <p className="UrgentCheckedText">
          {this.context.jobPayPage.text1} <br />
          <br />
          {this.context.jobPayPage.text2}
          <br />
          <br />
        </p>
        <div id="urgentCheckedButtons">
          <StripeButton />
          <button
            onClick={this.cancelUrgency}
            id="UrgentCheckedButtonNO"
            className="btn-primary"
          >
            {this.context.jobPayPage.buttonYES}
          </button>
          <br />
          <button
            onClick={this.cancelUrgency}
            id="UrgentCheckedButtonNO"
            className="btn-secondary"
          >
            {this.context.jobPayPage.buttonNO}
          </button>
        </div>
      </div>
    );
  }
}

UrgentChecked.contextType = LanguageContext;
