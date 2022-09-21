import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/squid">Squid</NavLink>
      <NavLink to="/okra">Okra</NavLink>
      <NavLink to="/hominy">Hominy</NavLink>
    </nav>
  );
}

export default NavBar;
