import { useState } from "react";    
import Button from "../button/Button";

const Form = () => {
    const [email, setEmail] = useState('');
    const handleOnChange = (e) => setEmail(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(e.nativeEvent.submitter.name);
        setEmail('');
      };
    

    return (
        <form onSubmit={handleOnSubmit}>
        <input
            placeholder="enter your email here please"
            value={email}
            onChange={handleOnChange}
            required
        /> <br/>
        <div className="flex-container">
            <button type="submit" name="customStripe">J'achète avec custom Stripe</button>
            <button type="submit" name="classicStripe">J'achète avec classic Stripe</button>
            <button type="submit" name="paypal">J'achète avec Paypal</button>
        </div>
        
        </form>
    );

};
  
  export default Form;