import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {/*<div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
        </div>*/}
      <div>
          <p>Danette Chocolat = 4$</p>
          <PayPalScriptProvider options={{"client-id": "AXcTRDeJ9rEJ1qB7kyZStKJTi9sWpxI474fG2oOK84PTBXMvh0N19sBzTxOTMUaxK9qvE3Ukks6VbOdk"}}>
            <PayPalButtons 
              createOrder={(data, actions) => {
                return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "45.00",
                                },
                            },
                        ],
                    });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function(details) {
                  // This function shows a transaction success message to your buyer.
                  alert('Transaction completed by ' + details.payer.name.given_name);
                });
              }}
            />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
//Ajouter Client ID dans .env voir vidéo PayPalDeveloper