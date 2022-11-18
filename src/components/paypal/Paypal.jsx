import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

function Paypal() {
  const navigate = useNavigate();

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
            navigate("/success");
          });
        }}
        /* // ça fonctionne mais c'est nul
        onCancel={(data, actions) => {
          return navigate("/cancel");
        }}
        */
        /*
        onError={(err) => {
          //TODO on peut payer même lorsqu'on n'a plus d'argent car le compte est lié à une cart infini
          return navigate("/cancel");
        }}
        */
      />
    </PayPalScriptProvider>
  );
}
export default Paypal;
