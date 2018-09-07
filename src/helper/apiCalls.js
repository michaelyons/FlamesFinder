import { key } from '../variables';
import { currentWeatherCleaner } from './cleaners';

export const getCurrentWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentWeatherCleaner(currentCityWeather);
};

export const getFiveDayWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=93103,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const fiveDayWeather = await response.json();
  return fiveDayWeather;
};
