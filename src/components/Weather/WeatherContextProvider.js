import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
