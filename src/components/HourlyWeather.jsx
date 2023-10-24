import { useEffect, useState } from "react";
import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function HourlyWeather({ time1, time2, maxTemp, code }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const myIcon = findIcon();
    setIcon(myIcon);
  }, []);

  const findIcon = () => {
    switch (code) {
      case 0:
        return sunny;
      case 1:
      case 2:
        return nimeabri;
      case 3:
        return cloudy;
      case 45:
      case 48:
        return foggy;
      case 61:
      case 63:
      case 65:
        return rain;
      case 71:
      case 73:
      case 75:
        return snow;
      case 95:
        return lightning;
    }
  };
  return (
    <div className="flex h-32 w-20 flex-col items-center justify-around text-white">
      <div className="text-lg">
        {time1}
        {time2}:00
      </div>
      <img className="h-12, w-12" src={icon}></img>
      <div className="text-sm">{Math.round(maxTemp)}&deg;</div>
    </div>
  );
}

export default HourlyWeather;
