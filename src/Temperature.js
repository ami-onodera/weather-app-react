import React from "react";
import Emoji from "a11y-react-emoji";

export default function Temperature() {
  return (
    <div className="container-left">
      <h3 id="current-city">Pallet Town</h3>
      <div className="celsius-fahrenheit">
        <h1>
          <span id="temp-emoji">
            <Emoji symbol="🌈" label="description" />
          </span>{" "}
          <span id="temp-number">25</span>
        </h1>
        <p>
          °C | °F
          {/* <a href="#" id="celsius-link">
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a> */}
        </p>
      </div>
      <h5 id="feels-like">Feels like 24°C</h5>
      <h3 id="weather-description">Double Rainbow</h3>
    </div>
  );
}
