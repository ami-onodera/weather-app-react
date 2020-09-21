import React from "react";
import Emoji from "a11y-react-emoji";

export default function Stats() {
  return (
    <div className="container-right">
      <h3 id="current-date">Date</h3>
      <div className="row">
        <div className="col">
          <div className="stats">
            <p id="big-emoji">
              <span>
                <Emoji symbol="💧" label="humidity" />
              </span>
            </p>
            <p id="humidity">55%</p>
          </div>
        </div>
        <div className="col">
          <div className="stats">
            <p id="big-emoji">
              <span>
                <Emoji symbol="💨" label="wind" />
              </span>
            </p>
            <p id="windspeed">2km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
