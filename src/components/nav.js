import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-start">
        <Link to="/" className="navbar-item tagline">
          Index
        </Link>
        <Link to="/events" className="navbar-item tagline">
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
