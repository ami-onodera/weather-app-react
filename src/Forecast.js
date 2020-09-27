import React, { useState } from "react";
import axios from "axios";
import Emoji from "a11y-react-emoji";

import HourForecast from "./HourForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data);
  }
  if (loaded) {
    return (
      <div className="row hour-bg" id="hour-forecast">
        <HourForecast />
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
