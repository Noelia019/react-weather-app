import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              input="Search"
              placeholder="Type a city..."
              autoComplete="on"
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              input="Submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>New york</h1>
      <ul>
        <li>Sunday 07:00 </li>
        <li>Rainy</li>
      </ul>
      <div className="row">
        <div className="col-6"></div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
          alt="Rain"
        ></img>
        9°C
        <div className="col-6"></div>
        <ul>
          <li>Humidity:75%</li>
          <li>Wind:6.26 km/h</li>
        </ul>
      </div>
    </div>
  );
}
