import WeeklyWeather from "./WeeklyWeather";

function WeeklySection({data}) {
    return ( 
        <div className="mt-10 h-52 w-5/6 rounded-xl bg-[#212f3d] pl-5 pr-5">
            <div className="mt-5 text-sm text-slate-400">TODAY'S FORECAST</div>
            <div className="mt-6 flex flex-row justify-around">
              <WeeklyWeather time1={data.hourly.time[0][11]} time2={data.hourly.time[0][12]} maxTemp={data.hourly.temperature_2m[0]} />
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[1][11]} time2={data.hourly.time[1][12]} maxTemp={data.hourly.temperature_2m[1]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[2][11]} time2={data.hourly.time[2][12]} maxTemp={data.hourly.temperature_2m[2]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[3][11]} time2={data.hourly.time[3][12]} maxTemp={data.hourly.temperature_2m[3]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[4][11]} time2={data.hourly.time[4][12]} maxTemp={data.hourly.temperature_2m[4]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[5][11]} time2={data.hourly.time[5][12]} maxTemp={data.hourly.temperature_2m[5]}/>
              <svg className="mt-1 h-32 w-1">
                <line y1="0" y2="120" className="stroke-slate-300" />
              </svg>
              <WeeklyWeather time1={data.hourly.time[6][11]} time2={data.hourly.time[6][12]} maxTemp={data.hourly.temperature_2m[6]}/>
            </div>
          </div>
     );
}

export default WeeklySection;