function CurrentWeather({ data, icon, city }) {
  return (
    <div className="flex w-5/6 flex-row rounded-lg">
      <div className="mt-3 flex h-52 w-5/6 flex-col pl-5 text-white">
        <div className="mt-5 text-4xl capitalize">{city}</div>
        <div className="mt-1 text-sm text-slate-400">Chance of rain: 23%</div>
        <div className="mt-12 text-6xl">
          {data.current.temperature_2m}&deg;C
        </div>
      </div>
      <div className="flex items-center">
        <img className="object-cover" src={icon}></img>
      </div>
    </div>
  );
}

export default CurrentWeather;
