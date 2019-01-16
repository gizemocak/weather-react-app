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
      temperature: ""
    };
  }

  changeToFahrenheit = () => {
    this.setState({
      temperature: "fahrenheit"
    });
  };

  changeToCelcius = () => {
    this.setState({ temperature: "celcius" });
  };

  render() {
    let days = this.props.response.filter(item => {
      return item.dt_txt.endsWith("12:00:00");
    });
    return (
      <div>
        <ul className="list">
          {days.length > 0 &&
            days.map(item => {
              return (
                <div className="weather">
                  <li> {moment(item.dt_txt.split(" ")[0]).format("dddd")}</li>
                  <div className="icon">
                    {item.weather[0].main === "Rain" && (
                      <WiDayRain size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Snow" && (
                      <WiDaySnow size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clear" && (
                      <WiDaySunny size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clouds" && (
                      <WiCloudy size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Sunny" && (
                      <WiDaySunny size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Thunderstorm" && (
                      <WiDayThunderstorm size={60} color="#f4a460" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Foggy" && (
                      <WiFog size={60} color="#f4a460" />
                    )}
                  </div>
                  <li>{item.weather[0].main}</li>
                  <div className="temperature">
                    {this.state.temperature === "" ||
                    this.state.temperature === "celcius"
                      ? `${Math.round(item.main.temp)}°C`
                      : `${Math.round(1.8 * item.main.temp + 32)}°F`}
                  </div>
                </div>
              );
            })}
        </ul>
        <button
          onClick={this.changeToFahrenheit}
          className={
            this.state.temperature === "fahrenheit"
              ? "temperature-selection"
              : "fahrenheit-celcius"
          }
        >
          °F
        </button>
        /
        <button
          onClick={this.changeToCelcius}
          className={
            this.state.temperature === "celcius"
              ? "temperature-selection"
              : "fahrenheit-celcius"
          }
        >
          °C
        </button>
      </div>
    );
  }
}

export default Weather;
