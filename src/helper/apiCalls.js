import { key } from '../key';

export const getCurrentWeatherData = async () => {
  const url = `api.openweathermap.org/data/2.5/weather?q=denver,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentCityWeather;
};
