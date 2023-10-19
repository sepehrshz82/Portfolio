import React, { Component } from "react";

function Days(props) {
  return (
    <div className="days">
      <span className="the_day">{props.day}</span>
      <div className="the_weather">
        <span>{props.icon}</span>
        <span>{props.state}</span>
      </div>
      <div className="the_temp">
        {props.high}/{props.low}
      </div>
    </div>
  );
}

export default Days;
