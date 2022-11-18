import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "EUR",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: 99.99,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            //alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
export default Paypal;