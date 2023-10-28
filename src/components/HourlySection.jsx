import HourlyWeather from "./HourlyWeather";

function HourlySection({ data }) {
  const d = new Date();
  let hour = d.getHours();

  return (
    <div className="mt-10 h-52 w-5/6 rounded-xl bg-[#212f3d] pl-5 pr-5">
      <div className="mt-5 text-sm text-slate-400">TODAY'S FORECAST</div>
      <div className="mt-6 flex flex-row divide-x-2 divide-slate-400 justify-between">
        {new Array(7).fill(0).map((x, i) => {
          return (
            <div key={i} className="flex justify-center w-full">
              <HourlyWeather
                time1={data.hourly.time[hour + i + 1][11]}
                time2={data.hourly.time[hour + i + 1][12]}
                maxTemp={data.hourly.temperature_2m[hour + i + 1]}
                code={data.hourly.weathercode[hour + i + 1]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlySection;
