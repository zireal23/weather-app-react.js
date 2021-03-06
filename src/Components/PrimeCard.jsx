import React, { Component } from "react";
import MainCard from "./mainCard";
import BottomComponent from "./BottomComponent";
import SearchBar from "./SearchBar";
import Loader from "react-js-loader";
class PrimeCard extends Component {
  state = {
    currentDayWeather: {},
    currentFeelsLike: "",
    forecastWeather: [],
    city: "",
    countryCode: "",
    timeZone: "",
    isLoaded: false,
  };

  weatherUpdater = function (lat, lon, city, country) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {
        
        this.setState({
          currentDayWeather: result.current,
          currentFeelsLike: result.current.weather[0].main,
          forecastWeather: result.daily,
          city: city,
          countryCode: country,
          isLoaded: true,
          timeZone: result.timezone,
        });

      });
    
  };
  handleEnter = (city) => {

    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {

        if (result[0] !== undefined) {
          this.weatherUpdater(
            result[0].lat,
            result[0].lon,
            result[0].name,
            result[0].country
          );
        } else {
          alert("Oops, City not found!!");
        }
      });
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=22.5727&lon=88.3639&exclude=hourly,minutely,alerts&units=metric&appid=cb4d3020367da2edfedc7ab07356eb3f`
    )
      .then((res) => res.json())
      .then((result) => {

        this.setState({
          currentDayWeather: result.current,
          forecastWeather: result.daily,
          city: `Kolkata`,
          countryCode: `IN`,
          isLoaded: true,
          timeZone: "Asia/Kolkata",
        });
      });
  }



  getCurrentDate() {
    let newDate = new Date();
    return newDate.toDateString();
  }

  render() {
   
    if (!this.state.isLoaded)
      return (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100vh",
            fontFamily: "Caveat, cursive",
            fontSize: "6rem",
          }}
        >
          <Loader
            type="spinner-default"
            title="Downloading Weather Data, Please Wait..."
            size={120}
            style={{
              fontSize: "8rem",
            }}
          />
        </div>
      );
    return (
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          display: "flex",
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <SearchBar
          
          onEnter={this.handleEnter}
        />
        <MainCard
          currentWeather={this.state.currentDayWeather}
          icon={this.state.currentDayWeather.weather[0].icon}
          currentDate={this.getCurrentDate()}
          cityName={this.state.city}
          countryCode={this.state.countryCode}
          currentFeelsLike={this.state.currentFeelsLike}
          timeZone={this.state.timeZone}
        />
        <BottomComponent
          weatherForecast={this.state.forecastWeather}
        />
      </div>
    );
  }
}

export default PrimeCard;
