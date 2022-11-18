import { useState } from "react";
import Paypal from "../paypal/Paypal";
import StripeSimple from "../stripe/StripeSimple";

const Form = () => {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => setEmail(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(e.nativeEvent.submitter.name);
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
        <button className="button" type="submit" name="customStripe">
          J'achète avec custom Stripe
        </button>
        <StripeSimple name="J'achète avec classic Stripe"/>
        <div className="button"><Paypal ></Paypal></div>
      </div>
    </form>
  );
};

export default Form;
