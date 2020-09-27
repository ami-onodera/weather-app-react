import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./hourforecast.css";

export default function HourForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="col-2 ml-1 md-1 hour">
      <p id="hour">
        <strong>{hours()}</strong>
      </p>
      <p className="small-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </p>
      <p id="hour-temperature">{temperature()}</p>
    </div>
  );
}
