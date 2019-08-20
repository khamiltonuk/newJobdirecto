import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class PremiumModal extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.close} className="backgroundBlock" />
                <div className="deleteModal">
                    <button onClick={this.props.close} className="modalButton">
                        <i className="fa fa-close" />
                    </button>
                    <h1 className="heading-1 deleteModalTitle">
                        Solo los usuarios premium pueden cerrar sus anuncios :)
                    </h1>
                    <Link to="/premiumBuy">
                        <button className="buttonBasic buttonPremium">
                            Comprar cuenta premium
                        </button>{" "}
                    </Link>
                </div>
            </div>
        );
    }
}

PremiumModal.contextType = LanguageContext;
