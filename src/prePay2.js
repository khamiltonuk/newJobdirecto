import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton2 from "./stripebutton2.js";

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
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle" className="heading-1">
          Encuentre trabajo RAPIDO y SEGURO
        </h1>
        <br />
        <br />
        {/*<img id="urgentExample" src="personpay.png" />
         */}{" "}
        <p className="UrgentCheckedText">
          Si busca trabajo u ofrece servicios, ahora puede poner un anuncio por $10!
          <br />
          <br />
          <span className="textHighlight">
            Su anuncio no sera borrado
          </span>{" "}
          y se mantendra por encima de los anuncios gratis por 48 horas. <br />
          <br />
          <br />
        </p>
        <div className="personPayButtons">
          <StripeButton2 />
          <button
            onClick={this.cancelPay}
            className="buttonBasic"
          >
            Deseo seguir buscando sin pagar
          </button>
          <div className="contactInfo"><p>Si tiene preguntas, quejas o sugerencias, porfavor envie un correo a wilfredo@jobdirecto.com</p></div>

        </div>
      </div>
    );
  }
}
