import React, { useState } from "react";
import axios from "axios";
import Stats from "./Stats";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "e58056dbe2936b35eaec505d63e7a608";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="outer-container" id="background-image">
        <div className="row">
          <div className="col-7 left-side">
            <div className="container-left">
              <h3 id="current-city">{weatherData.city}</h3>
              <div className="celsius-fahrenheit">
                <h1>
                  <span id="temp-icon">
                    <WeatherIcon code={weatherData.icon} />
                  </span>{" "}
                </h1>
                <Temperature celsius={weatherData.temperature} />
              </div>
              <h5 id="feels-like">Feels like 24°C</h5>
              <h3 className="text-capitalize" id="weather-description">
                {weatherData.description}
              </h3>
            </div>
          </div>
          <Stats data={weatherData} />
          <div className="container">
            <div>
              <form onSubmit={handleSubmit} id="search-form">
                <div className="search-bar">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search another city"
                      aria-label="search"
                      aria-describedby="button-addon2"
                      id="search-bar"
                      onChange={handleCityChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        id="button-addon2"
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="container hourly-forecast">
            <Forecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
