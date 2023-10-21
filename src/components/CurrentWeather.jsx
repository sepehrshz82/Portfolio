import { useState } from "react";
import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function CurrentWeather({data, city}) {
    return ( 
        <div className="flex w-5/6 flex-row rounded-lg">
            <div className="mt-3 flex h-52 w-5/6 flex-col pl-5 text-white">
              <div className="mt-5 text-4xl capitalize">{city}</div>
              <div className="mt-1 text-sm text-slate-400">
                Chance of rain: 23%
              </div>
              <div className="mt-12 text-6xl">
                {data.current.temperature_2m}&deg;C
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-52 object-cover" src={sunny}></img>
            </div>
          </div>
     );
}

export default CurrentWeather;