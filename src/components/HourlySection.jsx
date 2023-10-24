import HourlyWeather from "./HourlyWeather";

function HourlySection({ data, icon }) {
  const d = new Date();
  let hour = d.getHours();

  return (
    <div className="mt-10 h-52 w-5/6 rounded-xl bg-[#212f3d] pl-5 pr-5">
      <div className="mt-5 text-sm text-slate-400">TODAY'S FORECAST</div>
      <div className="mt-6 flex flex-row justify-around">
        {new Array(7).fill(0).map((x, i) => {
          return (
            <div>
              <HourlyWeather
                key={i}
                time1={data.hourly.time[hour + i + 1][11]}
                time2={data.hourly.time[hour + i + 1][12]}
                maxTemp={data.hourly.temperature_2m[hour + i + 1]}
                code={data.hourly.weathercode[hour + i + 1]}
              />
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlySection;
