import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function HourlyWeather({ time1, time2, maxTemp, code }) {
  const weatherCode = code
  
  const weatherImages = {
    0: sunny,
    1: nimeabri,
    2: nimeabri,
    3: cloudy,
    45: foggy,
    48: foggy,
    51: rain,
    53: rain,
    55: rain,
    56: rain,
    57: rain,
    61: rain,
    63: rain,
    65: rain,
    66: rain,
    67: rain,
    71: snow,
    73: snow,
    75: snow,
    77: snow,
    80: rain,
    81: rain,
    82: rain,
    86: snow,
    85: snow,
    95: lightning,
    96: lightning,
    99: lightning
  }
  const image = weatherImages[weatherCode]

  return (
    <div className="flex h-32 w-20 flex-col items-center justify-around text-white">
      <div className="text-lg">
        {time1}
        {time2}:00
      </div>
      <img className="h-12, w-12" src={image}></img>
      <div className="text-sm">{Math.round(maxTemp)}&deg;</div>
    </div>
  );
}

export default HourlyWeather;
