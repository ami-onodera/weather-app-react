import React from "react";
import Emoji from "a11y-react-emoji";

export default function Forecast() {
  return (
    <div class="row hour-bg" id="hour-forecast">
      <div class="col-2 ml-1 md-1 hour">
        <p id="hour">
          <strong>22:00</strong>
        </p>
        <p class="small-emoji">
          <span>
            <Emoji symbol="🌈" label="description" />
          </span>
        </p>
        <p></p>
      </div>

      <div class="col-2 ml-1 md-1 hour">
        <p id="hour">
          <strong>22:00</strong>
        </p>
        <p class="small-emoji">
          <span>
            <Emoji symbol="🌈" label="description" />
          </span>
        </p>
        <p></p>
      </div>

      <div class="col-2 ml-1 md-1 hour">
        <p id="hour">
          <strong>22:00</strong>
        </p>
        <p class="small-emoji">
          <span>
            <Emoji symbol="🌈" label="description" />
          </span>
        </p>
        <p></p>
      </div>

      <div class="col-2 ml-1 md-1 hour">
        <p id="hour">
          <strong>22:00</strong>
        </p>
        <p class="small-emoji">
          <span>
            <Emoji symbol="🌈" label="description" />
          </span>
        </p>
        <p></p>
      </div>

      <div class="col-2 ml-1 md-1 hour">
        <p id="hour">
          <strong>22:00</strong>
        </p>
        <p class="small-emoji">
          <span>
            <Emoji symbol="🌈" label="description" />
          </span>
        </p>
        <p></p>
      </div>
    </div>
  );
}
