import React from "react";
import { Link } from "react-router-dom";
import dayout from "../images/dayout2.png";
import Nav from "./nav";

export default function Home() {
  return (
    <div className="centered">
      <Nav />
      <Link to="/events">
        <img src={dayout} alt="dayout-logo" className="animated fadeInLeft" />
        <p className="tagline animated fadeInRight">
          <strong>A guide to festivals in London</strong>
        </p>
      </Link>
    </div>
  );
}
