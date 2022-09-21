import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
import Squid from "./Squid";
import Okra from "./Okra";
import Hominy from "./Hominy";

function VendingMachine(): JSX.Element {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squid" element={<Squid />} />
        <Route path="/okra" element={<Okra />} />
        <Route path="/hominy" element={<Hominy />} />
      </Routes>
    </Router>
  );
}

export default VendingMachine;
