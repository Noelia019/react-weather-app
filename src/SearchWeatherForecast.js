import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./SearchWeatherForecast.css";
import axios from "axios";

export default function SearchWeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded();
  }

  if (loaded) {
    console.log(forecast.data);
    return (
      <div className="SearchWeatherForecast">
        <div className="row">
          <div className="col-2">
            <div className="SearchWeatherForecast-day">Thurs</div>{" "}
            <div className="SearchWeatherForecast-icon">
              <WeatherIcon code="clear-sky-day" size={32} />
            </div>{" "}
            <div className="SearchWeatherForecast-Temp"></div>
            <span className="SearchWeatherForecast-maxTemp">19</span>
            <span className="SearchWeatherForecast-minTemp">10</span>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiKey = `tb298cc4f2885220cc362db45835oaea`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
