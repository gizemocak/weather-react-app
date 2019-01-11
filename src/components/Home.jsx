import React from "react";
import Weather from "./Weather";
import "../App.css";
import countries from "../constants/constants";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      city: "",
      country: "CA"
    };
  }
  handleFetch = e => {
    e.preventDefault();
    //TODO use async/await
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      },${this.state.country.toLowerCase()}&appid=154d4d3b7cb496905768200e3bad4142&units=metric`
    )
      .then(res => res.json())
      .then(data => this.setState({ response: data.list }));
  };

  getInputValue = e => {
    this.setState({ city: e.target.value });
  };

  handleCountryChange = e => {
    this.setState({ country: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="header">Weather app</div>
        <br />
        <form>
          <label className="label">
            <input
              type="text"
              value={this.state.city}
              onChange={this.getInputValue}
              className="input"
              placeholder="City"
            />
            <div className="country">
              <select
                value={this.state.country}
                onChange={this.handleCountryChange}
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={this.handleFetch} className="button">
              Show The Weather
            </button>
          </label>
        </form>
        <br />
        {this.state.response.length > 0 && (
          <Weather response={this.state.response} />
        )}
      </div>
    );
  }
}

export default Home;
