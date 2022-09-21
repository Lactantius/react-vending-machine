import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <>
      <h2>
        This vending machine sells dried squid, pickled okra, and the best
        hominy you ever had. Enjoy!
      </h2>
      <ul className="Home-item-list">
        <li>
          <Link to="squid">Dried Squid</Link>
        </li>
        <li>
          <Link to="okra">Pickled Okra</Link>
        </li>
        <li>
          <Link to="hominy">Hominy</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
