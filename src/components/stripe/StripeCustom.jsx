import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../form/FormStripe";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);


export default function StripeCustom() {
    const [clientSecret, setClientSecret] = useState("");

    const location = useLocation();

    useEffect(() => {
        // Create PaymentIntent as soon as the page load
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: location.state.email }),
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


    return clientSecret && (
        <Elements options={options} stripe={stripePromise}>
            <CheckoutForm email={location.state.email} />
        </Elements>
    )

}