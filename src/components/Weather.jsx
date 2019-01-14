import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiDayRain,
  WiDaySnow,
  WiDayThunderstorm,
  WiFog
} from "weather-icons-react";
import "../App.css";
import moment from "moment";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      fahrenheit: ""
    };
  }
  componentDidMount() {
    let days = this.props.response.filter(item => {
      return item.dt_txt.endsWith("12:00:00");
    });
    this.setState({ days });
  }

  changeToFahrenheit = () => {
    this.setState({ temperature: "fahrenheit" });
  };

  changeToCelcius = () => {
    this.setState({ temperature: "celcius" });
  };

  render() {
    console.log(this.props);
    console.log("days", this.state.days);
    return (
      <div>
        <ul className="list">
          {this.state.days.length > 0 &&
            this.state.days.map(item => {
              return (
                <div className="weather">
                  <li> {moment(item.dt_txt.split(" ")[0]).format("dddd")}</li>
                  <div className="icon">
                    {item.weather[0].main === "Rain" && (
                      <WiDayRain size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Snow" && (
                      <WiDaySnow size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clear" && (
                      <WiDaySunny size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clouds" && (
                      <WiCloudy size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Sunny" && (
                      <WiDaySunny size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Thunderstorm" && (
                      <WiDayThunderstorm size={60} color="#fff" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Foggy" && (
                      <WiFog size={60} color="#fff" />
                    )}
                  </div>
                  <li>{item.weather[0].main}</li>
                  <div className="temperature">
                    {this.state.temperature === "" ||
                    this.state.temperature === "celcius"
                      ? `${Math.round((item.main.temp / 10 - 32) / 1.8)}℃`
                      : `${Math.round(item.main.temp / 10)}°F`}
                  </div>
                </div>
              );
            })}
        </ul>
        <button onClick={this.changeToFahrenheit} className="fahrenheit">
          °F
        </button>
        /
        <button onClick={this.changeToCelcius} className="fahrenheit">
          °C
        </button>
      </div>
    );
  }
}

export default Weather;
