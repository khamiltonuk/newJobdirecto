import React from "react";
<<<<<<< HEAD:src/pages/PremiumBuy/PremiumBuyController.jsx
import axios from "axios";
import StripeButton3 from "../../components/StripeButton3/StripeButton3";
import { LanguageContext } from "../../components/Language/LanguageContext";

=======
import { LanguageContext } from "./languageContext";
import StripeButton3 from "./stripebutton3.js";
>>>>>>> 5500f4e56e59eee94c21030a626ee433c115154a:src/premiumBuy.js

export default class PremiumBuy extends React.Component {
    render() {
        return (
            <div className="container">
                <p className="text">
                    {" "}
                    Las cuentas premium por ahora solo cuestan 5 dolares al mes.
                    Este precio probablemente subira pronto.
                    <br />
                    <br />
                    Solo las cuentas premium pueden cerrar sus anuncios. Pronto
                    tambien podran editar sus anuncios y tendran un TOP post
                    gratuito cada mes.
                    <br />
                    <br />
                    Puede cancelar su cuenta premium cuando desee
                </p>
                <div className="PrePayPersonButtons">
                    <StripeButton3 />

                    <button
                        onClick={this.cancelPay}
                        className="buttonBasic buttonOpaque prePay"
                    >
                        {this.context.PrePayPerson.button}
                    </button>
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </div>
            </div>
        );
    }
}

PremiumBuy.contextType = LanguageContext;
