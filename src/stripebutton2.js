import React, { useState } from "react";
import axios from "axios";

function StripeButton2() {
  const stripe = Stripe("pk_live_5PjwBk9dSdW7htTKHQ3HKrTd");

  const [error, setError] = useState();

  const handleClick = () => {
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_FKbzx0lbo7bZZR", quantity: 1 }],
        successUrl:
          window.location.protocol + "//www.jobdirecto.com/personConfirm",
        cancelUrl:
          window.location.protocol + "//www.jobdirecto.com/StripeButton"
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
      <button
        id="personfinalpaybutton"
        className="btn-primary"
        onClick={handleClick}
      >
        Pagar 10$
        <br />
      </button>
      <div>{error}</div>
    </div>
  );
}

export default StripeButton2;
