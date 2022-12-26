import React from "react";
import Weather from "./weather.js";
import Service from "./service.js";
import Events from "./events.js";
import Header from "./header.js";
import Nav from "./nav.js";
import moment from "moment";

const EventsIndex = () => {
  const today = moment().format("dddd, MMMM Do YYYY");
  return (
    <div className="container">
      <Nav />
      <div className="section has-text-centered eventsbox">
        <Header />
        <h1>A guide to festivals around London</h1>
        <p>{today}</p>
        <div className="box">
          <Events />
        </div>
        <div className="row columns">
          <div className="column is-half">
            <div className="control is-expanded">
              <div className="has-text-centered box">
                <h1>
                  <strong>Weather today</strong>
                </h1>
                <hr />
                <Weather />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="box height">
              <div className="control is-expanded">
                <div className="has-text-centered">
                  <h1>
                    <strong>Tube services today</strong>
                  </h1>
                  <hr />
                  <Service />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsIndex;
