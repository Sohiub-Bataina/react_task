import { useCallback, useState } from 'react';
import axios from 'axios';

const useWeatherData = () => {
  const [loading, setLoading] = useState(false);
  const apiKey = "9687d5fcbc2fa91fa6e5dbf80bafdfc9";

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error("Error fetching weather data:", error);
      return null;
    }
  }, [apiKey]);

  return { fetchWeather, loading };
};

export default useWeatherData;
