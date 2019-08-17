import React, { useState } from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { useContext } from "react";

function StripeButton2() {
    const context = useContext(LanguageContext);

    const stripe = Stripe("pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ");

    const [error, setError] = useState();

    const handleClick = () => {
        stripe
            .redirectToCheckout({
                items: [{ sku: "sku_Fdanz5rW5EBFPX", quantity: 1 }],
                successUrl:
                    window.location.protocol +
                    "//www.jobdirecto.com/personConfirm",
                cancelUrl:
                    window.location.protocol +
                    "//www.jobdirecto.com/StripeButton"
            })
            .then(result => {
                if (result.error) {
                    setError(result.error.message);
                }
            });

        console.log("someone wants to pay");
        event.preventDefault();
        axios.post("/wantsToPay").then(resp => {
            console.log("yes pay");
        });
    };

    return (
        <div>
            <button className="buttonBasic" onClick={handleClick}>
                {context.prePay2.buttonPay}

                <br />
            </button>
            <div>{error}</div>
        </div>
    );
}

export default StripeButton2;
StripeButton2.contextType = LanguageContext;
