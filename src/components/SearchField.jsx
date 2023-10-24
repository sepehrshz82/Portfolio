import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { fetchData } from "./Api";
import cloudy from "../images/cloudy.png";
import foggy from "../images/foggy.png";
import lightning from "../images/lightning.png";
import nimeabri from "../images/nimeabri.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sunny from "../images/sunny.png";

function SearchField({ setIsShow, setCity, setIcon, data, setData, city }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    if (searchInput) setCity(searchInput);
    const apiData = await fetchData(city);
    setData(apiData);
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
    const myIcon = findIcon();
    setIcon(myIcon);
    console.log(data);
  };

  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  };

  const findIcon = () => {
    switch (data.current.weathercode) {
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
  );
}

export default SearchField;
