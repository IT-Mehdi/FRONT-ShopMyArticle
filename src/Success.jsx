import {Link} from "react-router-dom"

function Success() {

    const handleOnClick = (e) => {
        e.preventDefault();
        window.location.replace("http://localhost:3000")
      };

    return (
        <div className="container">
        <h1>Thank you for your purchase</h1>
            <h2>You will find your pdf in your email</h2>
            <Link to={`/`} className="button">Back to shopping</Link>
        </div>
    );
}

export default Success;
