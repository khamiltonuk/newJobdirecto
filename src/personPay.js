import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton2 from "./stripebutton2.js";

export default class PersonPay extends React.Component {
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
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle" className="heading-1">
          Ahora puede poner un anuncio de BUSCO TRABAJO
        </h1>
        <br />
        <br />
        {/*<img id="urgentExample" src="personpay.png" />
         */}{" "}
        <p className="UrgentCheckedText">
          Si desea diferenciarse del resto, ahora puede poner un anuncio naranja
          en nuestra pagina por un precio de 10$!
          <br />
          <br />
          Su anuncio no sera borrado y se mantendra arriba en la lista por 48
          horas y lo veran miles de personas para que pueda encontrar trabajo
          con rapidez. <br />
          <br />
          <br />
        </p>
        <StripeButton2 />
        <button
          onClick={this.cancelPay}
          id="UrgentCheckedButtonNO"
          className="btn-secondary"
        >
          Deseo seguir buscando sin pagar
        </button>
      </div>
    );
  }
}
