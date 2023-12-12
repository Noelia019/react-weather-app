import React, { useState } from "react";
import SearchInfo from "./SearchInfo";
import SearchWeatherForecast from "./SearchWeatherForecast";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleTemperature(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    let apiKey = `tb298cc4f2885220cc362db45835oaea`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
        <SearchWeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
