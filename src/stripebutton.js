import React, { useState } from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { useContext } from "react";

function StripeButton() {
    let stripeKey, itemArray, successUrl, failUrl;

    if (window.location.hostname == "localhost") {
        stripeKey = "pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3";
        itemArray = "sku_Fdr59otEvaL6b7";
        successUrl = "//localhost:8080/jobConfirm";
        failUrl = "//localhost:8080/StripeButton";
    } else {
        stripeKey = "pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ";
        itemArray = "sku_FdasqwNe7sxEJj";
        successUrl = "//www.jobdirecto.com/jobConfirm";
        failUrl = "//www.jobdirecto.com/StripeButton";
    }
    const context = useContext(LanguageContext);

    const stripe = Stripe(stripeKey);

    const [error, setError] = useState();

    const handleClick = () => {
        stripe
            .redirectToCheckout({
                items: [{ sku: itemArray, quantity: 1 }],

                successUrl: window.location.protocol + successUrl,

                cancelUrl: window.location.protocol + failUrl
            })
            .then(result => {
                if (result.error) {
                    setError(result.error.message);
                }
            });

        event.preventDefault();
        axios.post("/wantsToPay").then(resp => {});
    };

    return (
        <div>
            <button className="buttonBasic" onClick={handleClick}>
                {context.jobPayPage.buttonYES}
                <br />
            </button>
            <div>{error}</div>
        </div>
    );
}

export default StripeButton;
StripeButton.contextType = LanguageContext;
