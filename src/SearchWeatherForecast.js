import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./SearchWeatherForecast.css";

export default function SearchWeatherForecast() {
  return (
    <div className="SearchWeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="SearchWeatherForecast-day">Thurs</div>{" "}
          <div className="SearchWeatherForecast-icon">
            <WeatherIcon code="01d" size={32} />
          </div>{" "}
          <div className="SearchWeatherForecast-Temp"></div>
          <span className="SearchWeatherForecast-maxTemp">19</span>
          <span className="SearchWeatherForecast-minTemp">10</span>
        </div>
      </div>
    </div>
  );
}
