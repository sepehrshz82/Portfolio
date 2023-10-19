import { useEffect } from "react";
import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function CurrentWeather({time1, time2, maxTemp}) {
  return (
    <div className="flex h-32 w-20 flex-col items-center justify-around text-white">
      <div className="text-lg">{time1}{time2}:00</div>
      <img className="h-12, w-12" src={sunny}></img>
      <div className="text-sm">{Math.round(maxTemp)}&deg;</div>
    </div>
  );
}

export default CurrentWeather;
