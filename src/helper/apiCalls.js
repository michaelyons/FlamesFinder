import { key, key2, key3 } from '../variables';
import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  tenDayWeatherCleaner
} from './cleaners';

export const allWeatherData = async (lat, long) => {
  const currentWeatherPromise = cleanCurrentWeather(lat, long);
  const tenHourPromise = cleanTenHourWeather(lat, long);
  const tenDayPromise = cleanTenDayWeather(lat, long);
  return await Promise.all([
    currentWeatherPromise,
    tenHourPromise,
    tenDayPromise
  ]);
};

export const cleanCurrentWeather = async (lat, long) => {
  const currentWeather = await getCurrentWeatherData(lat, long);
  return currentWeatherCleaner(currentWeather);
};

export const cleanTenHourWeather = async (lat, long) => {
  const tenHourWeather = await getTenHourWeatherData(lat, long);
  return tenHourWeatherCleaner(tenHourWeather);
};
export const cleanTenDayWeather = async (lat, long) => {
  const tenDayWeather = await getTenDayWeatherData(lat, long);
  return tenDayWeatherCleaner(tenDayWeather);
};

export const getCurrentWeatherData = async (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&us&units=imperial&APPID=${key}`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentCityWeather;
};

export const getTenHourWeatherData = async (lat, long) => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/${lat},${long}.json`;
  const response = await fetch(url);
  const tenHourWeather = await response.json();
  return tenHourWeather;
};

export const getTenDayWeatherData = async (lat, long) => {
  const url = `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/${lat},${long}.json`;
  const response = await fetch(url);
  const tenDayWeather = await response.json();
  return tenDayWeather;
};

export const getCampsiteData = async () => {
  const position = await getCurrentPosition();
  const { latitude, longitude } = position.coords;
  const url = `http://api.amp.active.com/camping/campgrounds?contractCode=CO&landmarkName=true&landmarkLat=${latitude}&landmarkLong=${longitude}&xml=true&api_key=${key3}`;
  const response = await fetch(url);
  const xmlCampData = await response.text();
  const convert = require('xml-js');
  const xml = xmlCampData;
  const campObject = convert.xml2json(xml, { compact: false, spaces: 2 });
  const parsedCampObject = JSON.parse(campObject);
  return parsedCampObject.elements[0].elements;
};

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getCampsite = async (contractID, facilityID) => {
  const url = `http://api.amp.active.com/camping/campground/details?contractCode=${contractID}&parkId=${facilityID}&api_key=${key3}`;
  const response = await fetch(url);
  const xmlCampData = await response.text();
  const convert = require('xml-js');
  const campObject = convert.xml2json(xmlCampData, {
    compact: false,
    spaces: 4
  });
  const parsedCampObject = JSON.parse(campObject);
  return parsedCampObject.elements[0];
};
