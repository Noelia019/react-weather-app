import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function SearchInfo(props) {
  return (
    <div className="SearchInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} className="float-left" />

            <span className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </div>
        </div>

        <div className="col-6">
          {" "}
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
