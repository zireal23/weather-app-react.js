import React from "react";
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
          
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          
          flex: "row",
          flexWrap: "wrap",
        }}
      >
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

}

export default MainCard;
