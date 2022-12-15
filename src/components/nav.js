import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/events" className="navbar-item">
            Index
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
