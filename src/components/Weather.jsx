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

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
  }
  componentDidMount() {
    let days = this.props.response.filter(item => {
      return item.dt_txt.endsWith("12:00:00");
    });
    this.setState({ days });
  }

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
                  <li> {item.dt_txt.split(" ")[0]}</li>
                  <div className="icon">
                    {item.weather[0].main === "Rain" && (
                      <WiDayRain size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Snow" && (
                      <WiDaySnow size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clear" && (
                      <WiDaySunny size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Clouds" && (
                      <WiCloudy size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Sunny" && (
                      <WiDaySunny size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Thunderstorm" && (
                      <WiDayThunderstorm size={40} color="#BD45D5" />
                    )}
                  </div>
                  <div className="icon">
                    {item.weather[0].main === "Foggy" && (
                      <WiFog size={40} color="#BD45D5" />
                    )}
                  </div>
                  <li>{item.weather[0].main}</li>
                  <div className="temperature">
                    {Math.round((item.main.temp / 10 - 32) / 1.8)}℃
                  </div>
                  <br />
                  <br />
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Weather;
