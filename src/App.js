import React from "react";
import "./styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Temperature from "./Temperature";
import Stats from "./Stats";
import Search from "./Search";
import Forecast from "./Forecast";
import Emoji from "a11y-react-emoji";

export default function App() {
  return (
    <div className="container">
      <div className="outer-container" id="background-image">
        <div className="row">
          <div className="col-7 left-side">
            <Temperature />
          </div>
          <div className="col-5 right-side">
            <Stats />
          </div>

          <div className="container">
            <Search />
          </div>

          <div class="container hourly-forecast">
            <Forecast />
          </div>
        </div>
      </div>
      <div class="byAmi">
        <p>
          Made with{" "}
          <span>
            <Emoji sumbol="💜" label="love" />
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/ami-onodera/weather-forecast"
            target="blank"
          >
            {" "}
            Ami Onodera
          </a>
        </p>
      </div>
    </div>
  );
}
