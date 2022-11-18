import {Link} from "react-router-dom"

function Cancel() {

    return (
        <div className="container containerRed">
        <h1>Fail</h1>
            <h2>Try again</h2>
            <Link to={`/`} className="button">Back to shopping</Link>
        </div>
    );
}

export default Cancel;
