import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fetchStripe = () => {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.url;
    })
}

const ProductDisplay = ({ name }) => (
  <button type="submit" className="button" onClick={fetchStripe}>
    {name}
  </button>
);


export default function StripeSimple({ name }) {
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
    <ProductDisplay name={name} />
  );
}