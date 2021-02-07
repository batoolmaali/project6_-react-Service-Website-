import React, { Component } from "react";
import "../assest/Css/WeatherAPI.css";
const key = "602d7d33ca42b5a47e216dd14db8d1f5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
export default class ProfilePage extends Component {
  state = {
    locationName: "",
    temp: 0,
    icon: "",
    
  };

  componentDidMount() {
    fetch(`${apiURL}q=Amman&appid=${key}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          locationName: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
        });
      })
  }

  getLocationWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetch(`${apiURL}lat=${lat}&lon=${lon}&appid=${key}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            locationName: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
          });
        })
        .then(() => {
          this.setbackgroundImage();
        })
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    });
  }

  render() {
    let temp = Math.round(this.state.temp - 273.15);
    return (
      <main className="Profile">
        <div
          className="weatherAndlocation-container"
        >
          <div className="weather-container">
            <div className="background-container">
              <h1>{this.state.locationName}</h1>
              <div className="flex-c">
                <h3>{temp} °C</h3>
              </div>
            </div>
          </div>
        </div>
       
      </main>
    );
  }
}
