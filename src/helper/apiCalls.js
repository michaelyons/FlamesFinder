import { key } from '../variables';
import { currentWeatherCleaner } from './cleaners';

export const getCurrentWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentWeatherCleaner(currentCityWeather);
};
