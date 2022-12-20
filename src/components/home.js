import React from "react";
import dayout from "../images/dayout2.png";
import { Link } from "react-router-dom";
import Nav from "./nav.js";

export default function Home() {
  return (
    <div className="centered">
      <Nav />
      <Link to="/events">
        <img src={dayout} alt="dayout-logo" className="animated fadeInLeft" />
      </Link>
      <p className="tagline animated fadeInRight">
        <strong>A guide to festivals in London</strong>
      </p>
    </div>
  );
}
