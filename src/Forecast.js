import React from "react";
import Emoji from "a11y-react-emoji";

export default function Forecast() {
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
}
