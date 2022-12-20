import React, { useState, useEffect } from "react";
import axios from "axios";

const weatherkey = process.env.REACT_APP_WEATHER_KEY;
const moment = require("moment");

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  function getWeather() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${weatherkey}&units=metric`
      )
      .then((res) => setWeather(res.data))
      .catch((error) => {
        setError("Could not fetch data. Please try again");
      });
  }

  return error ? (
    <div className="weatherBox">
      <p>
        Weather details could not be loaded at the moment. Please reload the
        page and try again
      </p>
    </div>
  ) : (
    <div>
      {weather && (
        <div>
          <div>
            <p>
              <strong>Temperature now:</strong>
            </p>
            <p> {weather.main ? weather.main.temp : "-"} &deg;C</p>
          </div>
          <div>
            <p>
              <strong>Temperature min:</strong>
            </p>
            <p> {weather.main ? weather.main.temp_min : "-"} &deg;C</p>
          </div>
          <div>
            <p>
              <strong>Temperature max:</strong>
            </p>
            <p> {weather.main ? weather.main.temp_max : "-"} &deg;C</p>
            <div>
              <p>
                <strong>Forecast: </strong>
              </p>
              <p>{weather.weather[0].main}</p>
            </div>
            <div>
              <p>
                <strong>Description: </strong>
              </p>
              <p>
                {weather.weather[0].description.substring(0, 1).toUpperCase() +
                  weather.weather[0].description.substring(1).toLowerCase()}
              </p>
            </div>
            <div>
              <p>
                <strong>Sunrise: </strong>
              </p>
              <p>{moment.unix(weather.sys.sunrise).format("h:mm:ss A")}</p>
            </div>
            <div>
              <p>
                <strong>Sunset: </strong>
              </p>
              <p>{moment.unix(weather.sys.sunset).format("h:mm:ss A")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
