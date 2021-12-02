import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySearch from "./CitySearch";
import Forecast from "./Forecast";
import "./App.css";
import Timestamp from "./Timestamp";

export default function App() {
  return (
    <div className="Wrapper">
      <div className="App d-flex justify-content-center">
        <div className="container text-center">
          <div className="row h-100">
            <div className="col-md-3 left flex-grow-1">
              <div className="col-md my-auto">
                <CitySearch />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row right">
                <div className="col-md"> </div>
                <h2>Five Day Forecast</h2>
              </div>
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
            </div>
          </div>
        </div>
      </div>
      <div className="timestamp">
        Last Updated: <div className="date"></div>
      </div>
      <div className="codedBy d-flex justify-content-center">
        <a href="https://github.com/JessMarciniak/react-weather-1">
          Open-source code
        </a>{" "}
        by Jessica Marciniak
      </div>
    </div>
  );
}
