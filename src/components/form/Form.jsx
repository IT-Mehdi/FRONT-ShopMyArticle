import { useState } from "react";
import Paypal from "../paypal/Paypal";
import StripeSimple from "../stripe/StripeSimple";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => setEmail(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const navigate = useNavigate();

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
        <button className="button" onClick={() => {
          navigate('/stripeCustom', { state: { email: email } })
        }}> J'achète avec custom stripe</button>
        <StripeSimple name="J'achète avec classic Stripe" />
        <div className="button"><Paypal ></Paypal></div>
      </div>
    </form>
  );
};

export default Form;
