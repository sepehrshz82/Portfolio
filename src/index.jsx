import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/navbar.css";
import "./style/style.css";
import "./style/day_forecast.css"
import "./style/days.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
