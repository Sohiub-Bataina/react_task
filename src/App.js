import React from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import WeatherContextProvider from './components/Weather/WeatherContextProvider';
import WeatherApp from './components/Weather/WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
  return (
    <div className="container mt-5">
      <Counter />
      <Timer />
      <WeatherContextProvider>
        <WeatherApp />
      </WeatherContextProvider>
    </div>
  );
};

export default App;
