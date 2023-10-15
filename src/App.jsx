import { useState } from "react";
import { fetchData } from "./Api";
import cloudy from "./images/cloudy.png";
import foggy from "./images/foggy.png";
import lightning from "./images/lightning.png";
import nimeabri from "./images/nimeabri.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import sunny from "./images/sunny.png";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("isfahan");

  const search = async () => {
    const apiData = await fetchData(city);
    setData(apiData);
    console.log(apiData);
  };

  return (
    <div className="flex flex-col items-center bg-[#0e1621] pb-10 pt-10">
      <input
        className="flex h-12 w-5/6 flex-col rounded-lg bg-[#212f3d] pl-5 text-white placeholder-slate-300"
        placeholder="Search for cities..."
      />
      <div className="mt-5 flex w-5/6 flex-row rounded-lg bg-[#212f3d]">
        <div className="mt-3 flex h-56 w-5/6 flex-col pl-5 text-white">
          <div className="mt-5 text-4xl">Madrid</div>
          <div className="mt-1 text-sm text-slate-400">Chance of rain: 23%</div>
          <div className="mt-12 text-6xl">23&deg;C</div>
        </div>
        <div className="flex items-center">
          <img className="h-52 object-cover" src={sunny}></img>
        </div>
      </div>
      <div className="mt-10 h-52 w-5/6 rounded-xl bg-[#6b7a89]">
        <span className="text-slate-400">TODAY'S FORECAST</span>
        <div></div>
      </div>
    </div>
  );
}

export default App;
