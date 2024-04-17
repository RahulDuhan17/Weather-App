import React, { useState } from "react";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    city: "Chennai",
    temp: 24,
    temp_min: 19,
    temp_max: 27,
    humidity: 22,
    speed: 12,
    feels_like: 26,
    description: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeather(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <InfoBox info={weather} updateInfo={updateInfo}/>
    </div>
  );
};

export default WeatherApp;
