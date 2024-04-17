import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactAnimatedWeather from "react-animated-weather";
import SearchBox from "./SearchBox";

const InfoBox = ({ info, updateInfo }) => {
  const sunnyDay = {
    icon: "CLEAR_DAY",
    color: "gold",
    size: 80,
    animate: true,
  };
  const coldDay = {
    icon: "SNOW",
    color: "blue",
    size: 80,
    animate: true,
  };
  const rainyDay = {
    icon: "RAIN",
    color: "white",
    size: 80,
    animate: true,
  };

  const HOT_URL =
    "https://images.unsplash.com/photo-1605158080227-fd61e78bdc8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
  const COLD_URL =
    "https://images.unsplash.com/photo-1447958508993-cb7e66f33cfa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxzbm93ZmFsbHxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box">
      <div className="card-container">
        <Card className="card">
          <CardMedia
            className="weather-img"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="weather image"
          />
        </Card>
        <div className="card-content">
          <br />
          <SearchBox updateInfo={updateInfo} />
          <CardContent>
            <Typography
              className="font"
              gutterBottom
              variant="h5"
              component="div"
            >
              <div>
                {info.city &&
                  info.city.charAt(0).toUpperCase() + info.city.slice(1)}
              </div>
              {info.humidity > 80 ? (
                <ReactAnimatedWeather
                  icon={rainyDay.icon}
                  color={rainyDay.color}
                  size={rainyDay.size}
                  animate={rainyDay.animate}
                />
              ) : info.temp > 15 ? (
                <ReactAnimatedWeather
                  icon={sunnyDay.icon}
                  color={sunnyDay.color}
                  size={sunnyDay.size}
                  animate={sunnyDay.animate}
                />
              ) : (
                <ReactAnimatedWeather
                  icon={coldDay.icon}
                  color={coldDay.color}
                  size={coldDay.size}
                  animate={coldDay.animate}
                />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p className="font">Temperature = {info.temp}&deg;C</p>
              <p className="font">Min Temp = {info.tempMin}&deg;C</p>
              <p className="font">Max Temp = {info.tempMax}&deg;C</p>
              <p className="font">Humidity = {info.humidity}%</p>
              <p className="font">Wind Speed = {info.speed} km/h</p>
              <p className="font">
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
