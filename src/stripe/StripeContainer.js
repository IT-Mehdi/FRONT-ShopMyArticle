import React from "react";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51M1uQ2BEXXgvBAUmQ4YcdbjHu0KHRxgZDQyy4N252j5V85CGG4nzkOx7jwYEeZ0JIuI3kZtPTPTzvkT6rcOAd2bE00HJkhYGtV"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () =>{
    return(
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm />
        </Elements>
    );
}

export default Stripe;