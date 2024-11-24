import React from "react";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-md mt-6">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-lg">{weatherDetails[0].description}</p>
      <div className="flex justify-between mt-4">
        <p className="text-xl font-semibold">{main.temp}°C</p>
        <p className="text-sm">Feels like {main.feels_like}°C</p>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <p>Humidity: {main.humidity}%</p>
        <p>Pressure: {main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
