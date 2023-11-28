import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              input="Search"
              placeholder="Type a city..."
              autoFocus="on"
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              input="Submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>New york</h1>
      <ul>
        <li>Sunday 07:00 </li>
        <li>Rainy</li>
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
              <span className="temperature">9</span>
              <span className="unit">°C</span>
            </span>
          </div>
        </div>

        <div className="col-6">
          {" "}
          <ul>
            <li>Humidity:75%</li>
            <li>Wind:6.26 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
