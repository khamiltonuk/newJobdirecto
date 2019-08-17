import React, { useState } from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { useContext } from "react";

function StripeButton() {
    const context = useContext(LanguageContext);
    const stripe = Stripe("pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ");

    const [error, setError] = useState();

    const handleClick = () => {
        console.log("I'm in stripe look");
        stripe
            .redirectToCheckout({
                items: [{ sku: "sku_FdasqwNe7sxEJj", quantity: 1 }],
                successUrl:
                    window.location.protocol +
                    "//www.jobdirecto.com/jobConfirm",
                cancelUrl:
                    window.location.protocol +
                    "//www.jobdirecto.com/StripeButton"
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
