import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({name}) => (
    <form action="/create-checkout-session" method="POST">
      <button type="submit" className="button">
        {name}
      </button>
      {/* <a href="https://buy.stripe.com/test_bIY3g34qjdnz8N29AA" type="button">
        Checkout
      </a> */}
    </form>
);


export default function StripeSimple({name}) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      navigate("/success");
    }

    if (query.get("canceled")) {
      navigate("/cancel");
    }
  }, []);

  return (
    <ProductDisplay name={name}/>
);
}