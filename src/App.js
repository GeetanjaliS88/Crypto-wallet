import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SellPage from "./components/SellPage";
import SwapPage from "./components/SwapPage";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Crypto Wallet</h1>
        <nav>
          <ul>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            <li>
              <Link to="/swap">Swap</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/sell" element={<SellPage />} />
          <Route path="/swap" element={<SwapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
