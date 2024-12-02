import React, { useState, useMemo } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faCloudShowersHeavy, faSun } from '@fortawesome/free-solid-svg-icons';

const WeatherDisplay = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const display = useMemo(() => {
    if (!weather) return null;

    
    let icon;
    let backgroundColor;
    switch (weather.weather[0].main) {
      case 'Clear':
        icon = faSun;
        backgroundColor = '#fcd34d'; 
        break;
      case 'Clouds':
        icon = faCloudSun;
        backgroundColor = '#a0aec0'; 
        break;
      case 'Rain':
        icon = faCloudRain;
        backgroundColor = '#3182ce'; 
        break;
      case 'Thunderstorm':
        icon = faCloudShowersHeavy;
        backgroundColor = '#4a5568'; 
        break;
      default:
        icon = faCloudSun;
        backgroundColor = '#edf2f7'; 
    }

    
    const temp = isCelsius
      ? weather.main.temp
      : (weather.main.temp * 9) / 5 + 32;

    const unit = isCelsius ? '°C' : '°F';

    return (
      <div
        style={{
          backgroundColor,
          padding: '20px',
          borderRadius: '10px',
          color: '#fff',
          transition: 'background-color 0.5s ease',
        }}
      >
        <Card style={{ background: 'transparent', border: 'none' }}>
          <CardBody>
            <CardTitle>{weather.name}</CardTitle>
            <CardText>
              Temperature: {temp.toFixed(1)} {unit}
            </CardText>
            <CardText>Condition: {weather.weather[0].description}</CardText>
            <FontAwesomeIcon icon={icon} size="3x" />
            <div className="mt-3">
              <Button color="secondary" onClick={toggleTemperatureUnit}>
                Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }, [weather, isCelsius]);

  return <div>{display}</div>;
};

export default WeatherDisplay;
