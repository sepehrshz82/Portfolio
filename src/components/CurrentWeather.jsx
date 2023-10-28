import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function CurrentWeather({ data, city }) {

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

  const image = weatherImages[data.current.weathercode]

  return (
    <div className="flex w-5/6 flex-row rounded-lg">
      <div className="mt-3 flex h-52 w-5/6 flex-col pl-5 text-white">
        <div className="mt-5 text-4xl capitalize">{city}</div>
        <div className="mt-1 text-sm text-slate-400">Chance of rain: 23%</div>
        <div className="mt-12 text-6xl">
          {data.current.temperature_2m}&deg;C
        </div>
      </div>
      <div className="flex items-center">
        <img className="object-cover" src={image}></img>
      </div>
    </div>
  );
}

export default CurrentWeather;
