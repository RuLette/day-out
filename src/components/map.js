import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.REACT_APP_MAPTOKEN;

export default function Map({ location }) {
  const [zoom, setZoom] = useState(14);
  const [lng, setLng] = useState(location.lng);
  const [lat, setLat] = useState(location.lat);
  const node = useRef(null);

  useEffect(() => {
    let map = new mapboxgl.Map({
      container: node.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [Number(lng), Number(lat)],
      zoom: zoom,
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
  }, [lat, lng]);

  return <div ref={node} className="map-container" />;
}
