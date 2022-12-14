import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import "./VendingMachine.css";

import Home from "./Home";
import NavBar from "./NavBar";
import Squid from "./Squid";
import Okra from "./Okra";
import Hominy from "./Hominy";

function VendingMachine(): JSX.Element {
  return (
    <Router>
      <NavBar />
      <h1 className="VendingMachine-title">Vending Machine</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="squid" element={<Squid />} />
        <Route path="okra" element={<Okra />} />
        <Route path="hominy" element={<Hominy />} />
      </Routes>
      <NavLink className="VendingMachine-home-link" to="/" end>
        Back to Home
      </NavLink>
    </Router>
  );
}

export default VendingMachine;
