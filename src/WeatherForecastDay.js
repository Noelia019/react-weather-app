import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="SearchWeatherForecast-day">{day()} </div>
      <div className="SearchWeatherForecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={32} />
      </div>{" "}
      <div className="SearchWeatherForecast-Temp">
        <span className="SearchWeatherForecast-maxTemp">
          {maxTemperature()}
        </span>
        <span className="SearchWeatherForecast-minTemp">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
