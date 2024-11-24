import { useState } from "react";

const API_KEY = "8cd092ff7fbf2c400d722622dc820dc7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const useWeatherAPI = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (location) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch Current Weather
      const weatherResponse = await fetch(
        `${BASE_URL}weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const weatherData = await weatherResponse.json();

      if (weatherResponse.ok) {
        setWeather(weatherData);
      } else {
        throw new Error(weatherData.message || "Error fetching weather data");
      }

      // Fetch Forecast
      const forecastResponse = await fetch(
        `${BASE_URL}forecast?q=${location}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastResponse.json();

      if (forecastResponse.ok) {
        setForecast(forecastData.list);
      } else {
        throw new Error(forecastData.message || "Error fetching forecast data");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeatherData };
};

export default useWeatherAPI;
