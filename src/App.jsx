import React, { useEffect } from "react";
import useWeatherAPI from "./hooks/useWeatherAPI";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

const App = () => {
  const { weather, forecast, loading, error, fetchWeatherData } = useWeatherAPI();

  useEffect(() => {
    fetchWeatherData("Dubai");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-900 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>

      {/* Search Bar */}
      <SearchBar onSearch={fetchWeatherData} />

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-lg">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500 text-lg">{error}</p>}

      {/* Current Weather */}
      {weather && <WeatherCard weather={weather} />}

      {/* Forecast */}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
