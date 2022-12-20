import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Map from "./map.js";
import { useNavigate } from "react-router-dom";

const skiddleKey = process.env.REACT_APP_SKIDDLEKEY;

const moment = require("moment");

export default function EventShow() {
  const [event, setEvent] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  function getEvent() {
    axios
      .get(`https://www.skiddle.com/api/v1/events/${id}`, {
        params: {
          api_key: skiddleKey,
        },
      })
      .then((res) => setEvent(res.data.results))
      .catch((error) => {
        setError("Could not fetch data. Please try again");
      });
  }

  useEffect(() => {
    getEvent();
  }, []);

  const venue = { ...event.venue };

  const location = {
    lat: venue.latitude,
    lng: venue.longitude,
  };

  return error ? (
    <div>
      <main className="section">
        <div className="container">
          <p>
            <strong>
              Event could not be loaded at the moment. Please reload the page
              and try again
            </strong>
          </p>
        </div>
      </main>
    </div>
  ) : (
    <div className="container">
      <div className="section eventshow">
        {!event ? (
          <p>Event Loading...</p>
        ) : (
          event && (
            <div className="row columns">
              <div className="column is-half">
                <button onClick={() => navigate(-1)}>Back to events</button>
                <div className="box">
                  <h4 className="title is-4">{venue.name}</h4>
                  <div className="column">
                    <figure className="image">
                      <img src={event.largeimageurl} alt={event.eventname} />
                    </figure>
                  </div>
                  <div className="column">
                    <h5>{event.description}</h5>
                    <p>
                      <strong>Date: </strong>
                      {moment(event.date).format("dddd, MMMM Do YYYY")}
                    </p>
                    <p>
                      <strong>Event start: </strong>
                      {event.openingtimes && event.openingtimes.doorsopen}
                    </p>
                    <p>
                      <strong>Event close: </strong>
                      {event.openingtimes && event.openingtimes.doorsclose}
                    </p>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="box">
                  <h4 className="title is-6">Location: </h4>
                  <p>
                    {venue.address} {venue.town}
                  </p>
                  {location.lat && <Map location={location} venue={venue} />}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
