import React, { useState } from "react";
import axios from "axios";
import Emoji from "a11y-react-emoji";

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
        <div className="col-2 ml-1 md-1 hour">
          <p id="hour">
            <strong>22:00</strong>
          </p>
          <p className="small-emoji">
            <span>
              <Emoji symbol="🌈" label="description" />
            </span>
          </p>
          <p></p>
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
