import "./index.css";
import Shop from "./Shop";
import Success from "./Success";
import Cancel from "./Cancel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StripeCustom from "./components/stripe/StripeCustom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={<Shop />} />
        <Route path="/stripeCustom" element={<StripeCustom />} />
      </Routes>
    </Router>
  );
}

export default App;
