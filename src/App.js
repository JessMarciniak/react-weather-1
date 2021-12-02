import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySearch from "./CitySearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySearch />
    </div>
  );
}
