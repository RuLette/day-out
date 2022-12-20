import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home.js";
import "bulma";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventShow from "./components/eventShow.js";
import "./style.scss";
import EventsIndex from "./components/eventsIndex.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/events", element: <EventsIndex /> },
  { path: "/events/fest/:id", element: <EventShow /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
