import './index.css';
import Shop from './Shop';
import Success from './Success';
import Cancel from './Cancel';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
