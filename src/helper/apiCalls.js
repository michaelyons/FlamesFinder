import { key, key2, key3 } from '../variables';
import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  tenDayWeatherCleaner
  // campgroundCleaner
} from './cleaners';

export const allWeatherData = async location => {
  const currentWeatherPromise = cleanCurrentWeather(location);
  const tenHourPromise = cleanTenHourWeather(location);
  const tenDayPromise = cleanTenDayWeather(location);
  return await Promise.all([
    currentWeatherPromise,
    tenHourPromise,
    tenDayPromise
  ]);
};

export const cleanCurrentWeather = async location => {
  const currentWeather = await getCurrentWeatherData(location);
  return currentWeatherCleaner(currentWeather);
};

export const cleanTenHourWeather = async location => {
  const tenHourWeather = await getTenHourWeatherData(location);
  return tenHourWeatherCleaner(tenHourWeather);
};
export const cleanTenDayWeather = async location => {
  const tenDayWeather = await getTenDayWeatherData(location);
  return tenDayWeatherCleaner(tenDayWeather);
};

// export const cleanCampgroundInfo = () => {
//   const campgrounds = getCampsiteData();
//   console.log('hi');
//   return campgroundCleaner(campgrounds);
// };

export const getCurrentWeatherData = async location => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentCityWeather;
};

export const getTenHourWeatherData = async location => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/${location}.json`;
  const response = await fetch(url);
  const tenHourWeather = await response.json();
  return tenHourWeather;
};

export const getTenDayWeatherData = async location => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/${location}.json`;
  const response = await fetch(url);
  const tenDayWeather = await response.json();
  return tenDayWeather;
};

export const getCampsiteData = async (lat, long) => {
  const url = `http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=${lat}&landmarkLong=${long}&xml=true&api_key=${key3}`;
  const response = await fetch(url);
  const xmlCampData = await response.text();
  const convert = require('xml-js');
  const xml = xmlCampData;
  const campObject = convert.xml2json(xml, { compact: false, spaces: 2 });
  const parsedCampObject = JSON.parse(campObject);
  console.log(parsedCampObject);
  return parsedCampObject;
};

export const getCurrentPosition = () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude, longitude } = position.coords;
    getCampsiteData(latitude, longitude);
  });
};

// const url = `http://api.amp.active.com/camping/campgrounds?pstate=CO&api_key=${key3}`;
