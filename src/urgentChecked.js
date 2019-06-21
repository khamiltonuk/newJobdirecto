import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton from "./stripebutton.js";

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
          Usted a marcado anuncio azul
        </h1>
        <img id="urgentExample" src="urgentExample.png" />
        <p className="UrgentCheckedText">
          Los anuncios azules los ven muchas mas personas. <br />
          <br />
          Quienes usan anuncios de azules se diferencian del resto y consiguen
          gente mas rapido y con experiencia. Cuestan tan solo 10 dolares (5
          veces menos que en Craigslist).
          <br />
          <br />
        </p>
        <StripeButton />

        <button
          onClick={this.cancelUrgency}
          id="UrgentCheckedButtonNO"
          className="btn-secondary"
        >
          Quiero un anuncio gratis y común
        </button>
      </div>
    );
  }
}
