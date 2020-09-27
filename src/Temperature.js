import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <h1>
          <span id="temp-number">{Math.round(props.celsius)}</span>
        </h1>
        <p>
          °C |
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </p>
      </span>
    );
  } else {
    return (
      <span>
        <h1>
          <span id="temp-number">{Math.round(fahrenheit())}</span>
        </h1>
        <p>
          <a href="/" id="celsius-link" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </p>
      </span>
    );
  }
}
