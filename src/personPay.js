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
        {/*<img id="urgentExample" src="personpay.png" />
         */}{" "}
        <p className="UrgentCheckedText">
          Si realmente necesita trabajo, ahora puede poner un anuncio naranja en
          nuestra pagina por un precio de 10$.
          <br />
          <br />
          Miles de personas visitan Jobdirecto cada dia buscando y ofreciendo
          trabajo. Si busca trabajo, ahora podra poner un anuncio naranja que
          estara por encima de los anuncios gratis (sin color) por 48 horas.{" "}
          <br />
          <br />
          <br />
        </p>
        <StripeButton2 />
        <button
          onClick={this.cancelPay}
          id="UrgentCheckedButtonNO"
          className="btn-secondary"
        >
          Quiero seguir buscando sin pagar
        </button>
      </div>
    );
  }
}
