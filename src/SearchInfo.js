import React from "react";
import FormattedDate from "./FormattedDate";
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
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="Rain"
              className="float-left"
            ></img>

            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
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
