import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

function Paypal() {
  const navigate = useNavigate();

  /*Style color: la couleur
          label: le libbelé sur le bouton paypal
          layout: mise en page (avoir plusieurs payement ou juste paypal)
          shape: la forme du boutton (rect/pill)
  */
  const style = { color: "gold",
                  height: 55,
                  label: "pay",
                  layout: "vertical",
                  shape: "pill"}

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "EUR",
      }}
    >
      <PayPalButtons
        style={style}
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
            navigate("/success");
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
export default Paypal;
