import React, { Component } from "react";
import Days from "./Days";

function DayForecast({data}) {
  return (
    <div id="day_forecast" className="sec_color">
      <p>7-day forecast</p>
      <div id="days_container">
        <Days day="today" state={data.daily.weathercode[0]} high={data.daily.temperature_2m_max[0]} low={data.daily.temperature_2m_min[0]}/>
        <Days day="tue" state={data.daily.weathercode[1]} high={data.daily.temperature_2m_max[1]} low={data.daily.temperature_2m_min[1]}/>
        <Days day="tue" state={data.daily.weathercode[2]} high={data.daily.temperature_2m_max[2]} low={data.daily.temperature_2m_min[2]}/>
        <Days day="tue" state={data.daily.weathercode[3]} high={data.daily.temperature_2m_max[3]} low={data.daily.temperature_2m_min[3]}/>
        <Days day="tue" state={data.daily.weathercode[4]} high={data.daily.temperature_2m_max[4]} low={data.daily.temperature_2m_min[4]}/>
        <Days day="tue" state={data.daily.weathercode[5]} high={data.daily.temperature_2m_max[5]} low={data.daily.temperature_2m_min[5]}/>
        <Days day="tue" state={data.daily.weathercode[6]} high={data.daily.temperature_2m_max[6]} low={data.daily.temperature_2m_min[6]}/>
      </div>
    </div>
  );
}

export default DayForecast;
