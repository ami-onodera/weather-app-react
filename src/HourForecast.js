import React from "react";
import Emoji from "a11y-react-emoji";

export default function HourForecast() {
  return (
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
  );
}
