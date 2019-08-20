import React, { useState } from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { useContext } from "react";

function StripeButton3() {
    const context = useContext(LanguageContext);
    /*real one*/
    /* const stripe = Stripe("pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ");*/
    /*test one*/
    // const stripe = Stripe("pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3");

    const stripe =
        window.location.hostname == "localhost"
            ? Stripe("pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3")
            : Stripe("pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ");

    const [error, setError] = useState();

    const handleClick = () => {
        stripe
            .redirectToCheckout({
                // the real one
                // items: [{ plan: "plan_Fer31qkbJx0UYm", quantity: 1 }],
                //test one
                items: [{ plan: "plan_FerG4ShuM9GS8D", quantity: 1 }],
                successUrl:
                    window.location.protocol + "//localhost:8080/premiumSet",
                /*  "//www.jobdirecto.com/premiumSet",*/
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
                {context.PrePayPerson.buttonPay}

                <br />
            </button>
            <div>{error}</div>
        </div>
    );
}

export default StripeButton3;
StripeButton3.contextType = LanguageContext;
