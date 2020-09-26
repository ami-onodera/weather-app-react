import React from "react";
import FormattedDate from "./FormattedDate";
import Emoji from "a11y-react-emoji";

export default function Stats(props) {
  return (
    <div className="col-5 right-side">
      <div className="container-right">
        <h3 id="current-date">
          <FormattedDate date={props.data.date} />
        </h3>
        <div className="row">
          <div className="col">
            <div className="stats">
              <p id="big-emoji">
                <span>
                  <Emoji symbol="💧" label="humidity" />
                </span>
              </p>
              <p id="humidity">{props.data.humidity}%</p>
            </div>
          </div>
          <div className="col">
            <div className="stats">
              <p id="big-emoji">
                <span>
                  <Emoji symbol="💨" label="wind" />
                </span>
              </p>
              <p id="windspeed">{props.data.wind}km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
