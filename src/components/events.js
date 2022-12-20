import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const moment = require("moment");

const skiddleKey = process.env.REACT_APP_SKIDDLEKEY;

export default function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents();
  });

  function getEvents() {
    axios
      .get("https://www.skiddle.com/api/v1/events/search/", {
        params: {
          latitude: 51.509865,
          longitude: -0.118092,
          radius: 5,
          order: "date",
          eventcode: "FEST",
          api_key: skiddleKey,
        },
      })
      .then((res) => setEvents(res.data.results))
      .catch((error) => {
        setError("Could not fetch data. Please try again");
      });
  }

  return error ? (
    <div>
      <main className="section">
        <div className="container">
          <p>
            <strong>
              Events could not be loaded at the moment. Please try again
            </strong>
          </p>
        </div>
      </main>
    </div>
  ) : !events ? (
    <div>
      <main className="section">
        <div className="container">
          <p>
            <strong>Events loading ...</strong>
          </p>
        </div>
      </main>
    </div>
  ) : (
    <div className="eventsbox">
      <div className="columns is-mobile is-multiline">
        {events &&
          events.map((event) => (
            <div
              key={event.id}
              className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile outer"
            >
              <Link to={`/events/fest/${event.id}`}>
                <strong>
                  <p className="eventname">{event.eventname}</p>
                </strong>
                <p> {moment(event.date).format("dddd, MMMM Do YYYY")} </p>
                <figure className="outer">
                  <img
                    src={event.imageurl}
                    alt="imgthumb"
                    className="imgthumb"
                  />
                </figure>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
