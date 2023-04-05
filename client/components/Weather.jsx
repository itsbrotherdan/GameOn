import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import icons for weather forecast
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun, faCloud, faCloudRain, faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum&current_weather=true&windspeed_unit=mph&timezone=auto';

const Weather = () => {
  // giving state
  const [weatherData, setWeatherData] = useState(null);

  // potential useEffect
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.error('Failed to GET', err);
      });
  }, []);

  // loading screen display
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  // days of the week to display
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // icons for types of weather
  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'clear':
        return <FontAwesomeIcon icon={faSun} />;
      case 'partly-cloudy':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'cloudy':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'light-rain':
        return <FontAwesomeIcon icon={faCloudRain} />;
      case 'heavy-rain':
        return <FontAwesomeIcon icon={faCloudRain} />;
      case 'snow':
        return <FontAwesomeIcon icon={faSnowflake} />;
      default:
        return null;
    }
  };

  return (
    <div className='weather-forecast'>
      <h2>Weekly Weather Forecast</h2>
    </div>
  );
};

export default Weather;
