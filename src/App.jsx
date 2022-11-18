import "./index.css";
import Shop from "./Shop";
import Success from "./Success";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Shop</Link>
      </div>

      <Routes>
        <Route path="/success" element={<Success />} />
        {/*<Route path="/cancel" element={<Cancel />} />*/}
        <Route path="/" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
