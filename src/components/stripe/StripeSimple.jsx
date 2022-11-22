import React from "react";

const fetchStripe = (email) => {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email: email}),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.url;
    })
}

const ProductDisplay = ({ name, email }) => (
  <button type="submit" className="button" onClick={() => { fetchStripe(email)}}>
    {name}
  </button>
);


export default function StripeSimple({ name, email }) {


  return (
    <ProductDisplay name={name} email={email} />
  );
}