import React, { useState, useEffect } from "react";

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

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeSimple({name}) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay name={name}/>
  );
}