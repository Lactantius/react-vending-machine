import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="squid">Squid</NavLink>
      <NavLink to="okra">Okra</NavLink>
      <NavLink to="hominy">Hominy</NavLink>
    </nav>
  );
}

export default NavBar;
