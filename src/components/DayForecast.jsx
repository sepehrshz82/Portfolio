import React, { Component } from "react";
import Days from "./Days";

function DayForecast() {
  return (
    <div id="day_forecast" className="sec_color">
      <p>7-day forecast</p>
      <div id="days_container">
        <Days day="today" state="sunny" high="37" low="27" icon="I" />
        <Days day="tue" state="cloudy" high="32" low="25" icon="I" />
        <Days day="tue" state="cloudy" high="32" low="25" icon="I" />
        <Days day="tue" state="cloudy" high="32" low="25" icon="I" />
        <Days day="tue" state="cloudy" high="32" low="25" icon="I" />
        <Days day="tue" state="cloudy" high="32" low="25" icon="I" />
      </div>
    </div>
  );
}

export default DayForecast;
