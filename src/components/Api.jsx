import axios from "axios";

export const fetchData = async (city) => {
  const geocode = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
  );
  let lat = geocode.data.results[0].latitude;
  let long = geocode.data.results[0].longitude;
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relativehumidity_2m,is_day,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&past_days=0`,
  );
  return response.data;
};
