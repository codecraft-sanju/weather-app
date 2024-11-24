import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="w-full max-w-4xl mt-8">
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-md p-4"
          >
            <p className="font-semibold">{new Date(day.dt_txt).toLocaleString()}</p>
            <p>{day.weather[0].description}</p>
            <p>Temp: {day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
