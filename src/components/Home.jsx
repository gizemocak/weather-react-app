import React, { Fragment } from "react";
import Weather from "./Weather";
import "../App.css";
import countries from "../constants/constants";
import { SocialIcon } from "react-social-icons";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      city: "",
      country: "CA"
    };
  }
  handleFetch = async e => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      },${this.state.country.toLowerCase()}&appid=154d4d3b7cb496905768200e3bad4142&units=metric`
    );
    const json = await response.json();
    this.setState({ response: json.list });
  };

  getInputValue = e => {
    this.setState({ city: e.target.value });
  };

  handleCountryChange = e => {
    this.setState({ country: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="header">CliMate</div>
        <form>
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
        </form>
        {this.state.response.length > 0 && (
          <Weather response={this.state.response} />
        )}
        <footer>
          <span className="footer-climate">CliMate</span>
          <SocialIcon
            className="social-icons"
            url="https://www.linkedin.com/in/gizemocak/"
            bgColor="#bab8b8"
          />
          <SocialIcon
            className="social-icons"
            url="https://github.com/gizemocak"
            bgColor="#bab8b8"
          />
          <SocialIcon
            url="https://gizemocak.com/"
            label="My portfolio"
            bgColor="#bab8b8"
          />
          <span className="name">Gizem Ocak</span>
          <span className="name">gizem_ocak@outlook.com</span>
        </footer>
      </Fragment>
    );
  }
}

export default Home;
