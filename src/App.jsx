import { useState } from "react";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("isfahan");  

  const search = async () => {
    const apiData = await fetchData(city);
    setData(apiData);
    console.log(apiData)
  };

  return (
    <>
      <button onClick={search}>click</button>
    </>
  )
}

export default App;
