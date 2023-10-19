import { useEffect, useState } from "react";
import styles from "./index.css"
import { fetchData } from "./components/Api";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { SiRainmeter } from "react-icons/si";
import { CiSun } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import DayForecast from "./components/DayForecast";
import Navbar from "./components/Navbar";
import cloudy from "./images/cloudy.png";
import foggy from "./images/foggy.png";
import lightning from "./images/lightning.png";
import nimeabri from "./images/nimeabri.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import sunny from "./images/sunny.png";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("isfahan");
  const [isShow, setIsShow] = useState(false);
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    if(searchInput) setCity(searchInput);
    const apiData = await fetchData(city);
    setData(apiData);
    setTimeout(() => {
          setIsShow(true);
    }, 2000);
    console.log(data);
  };

  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      search();
    }
  };

  return (
    <>
      {!isShow ? (
        <div className="flex h-screen w-full items-center justify-center">
          <span className="box-border inline-block h-24 w-24 animate-spin-slow rounded-full border-[15px] border-dotted border-slate-500"></span>
        </div>
      ) : (
        <div className="flex flex-row w-full">
        <Navbar/>
        <div className="flex flex-col w-[71%] items-center bg-[#0e1621] pb-10 pt-5">
          {/* Search field */}
          <div className="flex h-12 w-5/6 flex-row items-center rounded-lg bg-[#212f3d] pr-5 text-white">
            <input
              className="flex w-[95%] flex-col rounded-lg bg-[#212f3d] pl-5 placeholder-slate-300 outline-none"
              placeholder="Search for cities..."
              onChange={searchHandler}
              value={searchInput} 
              onKeyDown={handleKeyDown}
            />
            <GoSearch
              className="grow-1 w-[5%] text-2xl text-slate-300"
              onClick={search}
            />
          </div>
          {/* Current weather */}
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
          {/* 7 day forecast */}
          <div className="mt-10 h-52 w-5/6 rounded-xl bg-[#212f3d] pl-5 pr-5">
            <div className="mt-5 text-sm text-slate-400">TODAY'S FORECAST</div>
            <div className="mt-6 flex flex-row justify-around">
              <CurrentWeather time1={data.hourly.time[0][11]} time2={data.hourly.time[0][12]} maxTemp={data.hourly.temperature_2m[0]} />
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[1][11]} time2={data.hourly.time[1][12]} maxTemp={data.hourly.temperature_2m[1]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[2][11]} time2={data.hourly.time[2][12]} maxTemp={data.hourly.temperature_2m[2]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[3][11]} time2={data.hourly.time[3][12]} maxTemp={data.hourly.temperature_2m[3]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[4][11]} time2={data.hourly.time[4][12]} maxTemp={data.hourly.temperature_2m[4]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[5][11]} time2={data.hourly.time[5][12]} maxTemp={data.hourly.temperature_2m[5]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <CurrentWeather time1={data.hourly.time[6][11]} time2={data.hourly.time[6][12]} maxTemp={data.hourly.temperature_2m[6]}/>
            </div>
          </div>
          {/* Air condition */}
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
        </div>
        <DayForecast/>
        </div>
      )}
    </>
  );
}

export default App;
