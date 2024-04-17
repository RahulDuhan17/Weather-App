import React, { useState } from "react";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_KEY = "204d576f2a3efa72ba761c2dc8b20c8c";

  const API_URL = " https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: Math.floor(jsonResponse.main.temp),
        tempMin: Math.floor(jsonResponse.main.temp_min),
        tempMax: Math.floor(jsonResponse.main.temp_max),
        humidity: jsonResponse.main.humidity,
        speed: Math.floor(jsonResponse.wind.speed),
        feelsLike: Math.floor(jsonResponse.main.feels_like),
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      setError("");
      console.log(city);
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <div className="search-icon">
          <input placeholder="Search the city" onChange={handleChange} value={city} required />
          <br />
          <br />
          <button  type="submit">
            <SearchIcon />
          </button>
        </div>

        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
