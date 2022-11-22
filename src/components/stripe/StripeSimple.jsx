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


  return (
    <ProductDisplay name={name} />
  );
}