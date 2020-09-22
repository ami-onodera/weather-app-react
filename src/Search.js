import React from "react";

export default function Search() {
  return (
    <div>
      <button id="current-city-button" className="current-city-button">
        Current City
      </button>
      <form id="search-form">
        <div className="search-bar">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search another city"
              aria-label="search"
              aria-describedby="button-addon2"
              id="search-bar"
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
  );
}
