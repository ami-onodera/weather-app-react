import React from "react";
import "./styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";
import Emoji from "a11y-react-emoji";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Berlin" />
      <div className="byAmi">
        <p>
          Made with{" "}
          <span>
            <Emoji symbol="💙" label="love" />
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
