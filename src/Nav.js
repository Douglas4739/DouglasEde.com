import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3 className="nav-logo">Logo goes here</h3>
      <ul className="nav-links">
        <Link to="/About">
          <li className="nav-list">Douglas Ede</li>
        </Link>
        <Link to="/Coaching">
          <li className="nav-list">Coaching</li>
        </Link>
        <Link to="/Programing">
          <li className="nav-list">Programing</li>
        </Link>
        <Link to="/Home">
          <li className="nav-list">Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
