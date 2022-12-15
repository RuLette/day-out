import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home";
import Events from "./components/events";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/events", element: <Events /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
