import { useState } from "react";
import Paypal from "../paypal/Paypal";

const Form = () => {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => setEmail(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder="enter your email here please"
        value={email}
        onChange={handleOnChange}
        required
      />{" "}
      <br />
      <div className="flex-container">
        <button type="submit" name="customStripe">
          J'achète avec custom Stripe
        </button>
        <button type="submit" name="classicStripe">
          J'achète avec classic Stripe
        </button>
        <Paypal></Paypal>
      </div>
    </form>
  );
};

export default Form;
