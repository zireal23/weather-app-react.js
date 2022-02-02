import React, { Component } from "react";
import MainLeftComp from "./MainLeftComp";
import MainRightcomp from "./MainRightcomp";

class MainCard extends React.Component {
  state = {
    url: "",
  };
  render() {
    const {
      currentWeather,
      currentDate,
      cityName,
      countryCode,
      currentFeelsLike,
      timeZone,
      icon,
    } = this.props;
    const { temp } = currentWeather;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          flex: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{
          color: "white",
          textAlign: "left",
        }}>
          <h1>Kolkata , India</h1>
          <h4>Monday ,  23rd January</h4>
        </div> */}
        <MainLeftComp
          temp={temp}
          icon={icon}
          currentDate={currentDate}
          cityName={cityName}
          countryCode={countryCode}
          currentWeather={currentWeather}
          currentFeelsLike={currentFeelsLike}
        />

        <MainRightcomp
          currentWeather={currentWeather}
          countryCode={countryCode}
          timeZone={timeZone}
        />
      </div>
    );
  }
  //getCurrentDate() {
  //  let newDate = new Date();
  //  return newDate.toDateString();
  //}
}

export default MainCard;
