import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { SiRainmeter } from "react-icons/si";
import { CiSun } from "react-icons/ci";

function AirCondition({ data }) {
  return (
    <div className="mt-5 h-52 w-5/6 rounded-xl bg-[#212f3d] pb-5 pl-3 pr-7 pt-4">
      <div className="ml-5 mt-5 inline text-sm text-slate-400">
        AIR CONDITIONS
      </div>
      <button className="float-right inline h-8 w-28 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 pb-[2px] text-sm text-white">
        See more
      </button>
      <div className="mt-4 flex flex-row flex-wrap gap-y-5 pl-10">
        <div className="w-1/2">
          <FaTemperatureHalf className="ml-[-25px] inline text-slate-500" />
          <div className="ml-2 inline text-slate-500">Real Feet</div>
          <div className="text-2xl text-slate-300">
            {data.current.temperature_2m}&deg;
          </div>
        </div>
        <div className="w-1/2">
          <FaWind className="ml-[-25px] inline text-slate-500" />
          <div className="ml-2 inline text-slate-500">Wind</div>
          <div className="text-2xl text-slate-300">
            {data.current.windspeed_10m} km/h
          </div>
        </div>
        <div className="w-1/2">
          <SiRainmeter className="ml-[-25px] inline text-slate-500" />
          <div className="ml-2 inline text-slate-500">Humidity</div>
          <div className="text-2xl text-slate-300">
            {data.current.relativehumidity_2m}%
          </div>
        </div>
        <div className="w-1/2">
          <CiSun className="ml-[-25px] inline text-slate-300" />
          <div className="ml-2 inline text-slate-500">UV Index</div>
          <div className="text-2xl text-slate-300">
            {data.daily.uv_index_max[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;
