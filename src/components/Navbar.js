import "./Navbarstyles.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>
          Portfo<span className="portfoliologo">lio.</span>
        </h1>
      </Link>

      <ul className="nav-menu">
        {/* first link */}
        <li>
          <Link to="/">Home </Link>
        </li>
        {/* second link */}
        <li>
          <Link to="/about">About </Link>
        </li>
        {/* third link */}
        <li>
          <Link to="/skill">Skill </Link>
        </li>
        {/* fourth  link */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
