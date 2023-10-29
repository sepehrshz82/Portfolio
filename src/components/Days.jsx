import React, { Component } from "react";
import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";


function Days({day, state, high, low}) {
  const weatherImages = {
    0: sunny,
    1: nimeabri,
    2: nimeabri,
    3: cloudy,
    45: foggy,
    48: foggy,
    51: rain,
    53: rain,
    55: rain,
    56: rain,
    57: rain,
    61: rain,
    63: rain,
    65: rain,
    66: rain,
    67: rain,
    71: snow,
    73: snow,
    75: snow,
    77: snow,
    80: rain,
    81: rain,
    82: rain,
    86: snow,
    85: snow,
    95: lightning,
    96: lightning,
    99: lightning
  }
  
  const image = weatherImages[state]

  return (
    <div className="days">
      <span className="the_day">{day}</span>
      <div className="the_weather">
        <img className="object-cover" src={image}></img>
      </div>
      <div className="the_temp">
        {high}/{low}
      </div>
    </div>
  );
}

export default Days;
