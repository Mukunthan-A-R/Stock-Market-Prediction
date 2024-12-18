import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import NavBar from "../components/Navbar";
import "./App.css";
import Home from "../routes/Home";
import Stocks from "../routes/Stocks";
import Graph from "../routes/Graph";
import Contact from "../routes/Contact";
import Portfolio from "../routes/Portfolio";
import Payment from "../routes/Payment";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        {/* Routes Defined for Every Page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trans" element={<Portfolio />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
