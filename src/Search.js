import React, { useState } from "react";
import SearchInfo from "./SearchInfo";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleTemperature(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    let apiKey = `15b6ba0523386a8a73b38b2440a74dea`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleTemperature);
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
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                input="search"
                placeholder="Type a city..."
                autoFocus="on"
                className="form-control"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <SearchInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
