import React, { useState, useEffect } from "react";
import axios from "axios";

const Lines = ({ name, lineStatuses }) => {
  return (
    <div>
      <p>
        <strong>{name}: </strong>
      </p>
      <p> {lineStatuses[0].statusSeverityDescription}</p>
    </div>
  );
};

export default function Service() {
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllLines();
  }, []);

  function getAllLines() {
    axios
      .get("https://api.tfl.gov.uk/line/mode/tube/status")
      .then((res) => setService(res.data))
      .catch((err) => setService(err.message));
  }
  return (
    <div>
      {!service && !error && (
        <p>
          <strong> ...tube status unavailable </strong>
        </p>
      )}
      {error && (
        <div>
          <p>
            <strong>Service currently unavailable</strong>
          </p>
          <p>{error}</p>
        </div>
      )}
      {service && service.map((service, i) => <Lines key={i} {...service} />)}
    </div>
  );
}
