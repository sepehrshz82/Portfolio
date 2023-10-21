import { useEffect, useState } from "react";
import "./index.css"
import { fetchData } from "./components/Api";
import DayForecast from "./components/DayForecast";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import SearchField from "./components/SearchField";
import WeeklySection from "./components/WeeklySection";
import AirCondition from "./components/AirCondition";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("isfahan");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const apiData = await fetchData(city);
    setData(apiData);
    setTimeout(() => {
          setIsShow(true);
    }, 2000);
};

  return (
    <>
      {!isShow ? (
        //Loader
        <div className="flex h-screen w-full items-center justify-center">
          <span className="box-border inline-block h-24 w-24 animate-spin-slow rounded-full border-[15px] border-dotted border-slate-500"></span>
        </div>
      ) : (
        <div className="flex flex-row w-full">
          <Navbar/>
          <div className="flex flex-col w-[71%] items-center bg-[#0e1621] pb-10 pt-5">
            <SearchField setIsShow={setIsShow} setCity={setCity} data={data} setData={setData} city={city} />
            <CurrentWeather data={data} city={city} />
            <WeeklySection data={data} />
            <AirCondition data={data} />
          </div>
          <DayForecast/>
        </div>
      )}
    </>
  );
}

export default App;
