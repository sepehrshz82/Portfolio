import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { fetchData } from "./Api";

function SearchField({ setIsShow, setCity, data, setData, city }) {
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

  return (
    <div className="flex h-12 w-5/6 flex-row items-center rounded-lg bg-[#212f3d] pr-5 text-white">
      <input
        className="flex-1 rounded-lg bg-[#212f3d] pl-5 placeholder-slate-300 outline-none"
        placeholder="Search for cities..."
        onChange={searchHandler}
        value={searchInput}
        onKeyDown={handleKeyDown}
      />
      <GoSearch
        className="flex-3 text-2xl text-slate-300"
        onClick={search}
      />
    </div>
  );
}

export default SearchField;
