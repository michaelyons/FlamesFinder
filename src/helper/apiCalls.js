import { key, key2 } from '../variables';
import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  tenDayWeatherCleaner
} from './cleaners';

export const allWeatherData = async () => {
  const currentWeatherPromise = cleanCurrentWeather();
  const tenHourPromise = cleanTenHourWeather();
  const fiveDayPromise = cleanTenDayWeather();
  return await Promise.all([
    currentWeatherPromise,
    tenHourPromise,
    fiveDayPromise
  ]);
};

export const cleanCurrentWeather = async () => {
  const currentWeather = await getCurrentWeatherData();
  return currentWeatherCleaner(currentWeather);
};

export const cleanTenHourWeather = async () => {
  const tenHourWeather = await getTenHourWeatherData();
  return tenHourWeatherCleaner(tenHourWeather);
};
export const cleanTenDayWeather = async () => {
  const tenDayWeather = await getTenDayWeatherData();
  return tenDayWeatherCleaner(tenDayWeather);
};

export const getCurrentWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentCityWeather;
};

export const getTenHourWeatherData = async () => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/80228.json`;
  const response = await fetch(url);
  const tenHourWeather = await response.json();
  return tenHourWeather;
};

export const getTenDayWeatherData = async () => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/80228.json`;
  const response = await fetch(url);
  const tenDayWeather = await response.json();
  return tenDayWeather;
};
