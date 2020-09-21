import React from "react";

export default function Stats() {
  return (
    <div className="container-right">
      <h3 id="current-date"></h3>
      <div className="row">
        <div className="col">
          <div className="stats">
            <p id="big-emoji">
              <span>💧</span>
            </p>
            <p id="humidity">55%</p>
          </div>
        </div>
        <div className="col">
          <div className="stats">
            <p id="big-emoji">
              <span>💨</span>
            </p>
            <p id="windspeed">2km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
