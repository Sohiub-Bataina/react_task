import React, { useContext, useState } from 'react';
import { WeatherContext } from './WeatherContextProvider';
import useWeatherData from '../../hooks/useWeatherData';
import WeatherDisplay from './WeatherDisplay';
import { InputGroup, Input, Button, Spinner } from 'reactstrap';

const WeatherApp = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const [city, setCity] = useState('');
  const { fetchWeather, loading } = useWeatherData();

  const handleSearch = async () => {
    if (!city.trim()) {
      alert('Please enter a city name!');
      return;
    }
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="text-center mt-4">
      <h3>Weather App</h3>
      <InputGroup className="mb-3">
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(); 
            }
          }}
          aria-label="City name"
        />
        <Button color="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      {loading && <Spinner color="primary" />}
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </div>
  );
};

export default WeatherApp;
