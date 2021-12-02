import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row tomorrow">
      <div className="col-md-4 weatherIcon my-auto">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="rgb(161, 255, 255)"
          size={30}
          animate={true}
        />{" "}
      </div>
      <div className="col-md-2 my-auto">Monday</div>
      <div className="col-md-2 my-auto">
        <span>H: 19</span>°/<span>L: 15</span>°
      </div>
      <div className="col-md-2 my-auto">Humidity: 20%</div>
      <div className="col-md-2 my-auto">Wind: 30 KM/H</div>
    </div>
  );
}
