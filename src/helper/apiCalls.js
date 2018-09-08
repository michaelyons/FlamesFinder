import { key, key2 } from '../variables';
import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  fiveDayWeatherCleaner
} from './cleaners';

export const allWeatherData = async () => {
  const currentWeatherPromise = getCurrentWeatherData();
  const tenHourPromise = getTenHourWeatherData();
  const fiveDayPromise = getFiveDayWeatherData();
  return await Promise.all([
    currentWeatherPromise,
    tenHourPromise,
    fiveDayPromise
  ]);
};

export const getCurrentWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentWeatherCleaner(currentCityWeather);
};

export const getTenHourWeatherData = async () => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/80228.json`;
  const response = await fetch(url);
  const tenHourWeather = await response.json();
  return tenHourWeatherCleaner(tenHourWeather);
};

export const getFiveDayWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=93103,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const fiveDayWeather = await response.json();
  return fiveDayWeatherCleaner(fiveDayWeather);
};
