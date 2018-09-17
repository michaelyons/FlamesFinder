import { key, key2, key3 } from '../variables';
import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  tenDayWeatherCleaner
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

export const getCurrentWeatherData = async (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long},us&units=imperial&APPID=${key}`;
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
  const url = `http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=${latitude}&landmarkLong=${longitude}&xml=true&api_key=${key3}`;
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

export const getCampsite = async facilityID => {
  const url = `http://api.amp.active.com/camping/campground/details?contractCode=CO&parkId=${facilityID}&api_key=${key3}`;
  const response = await fetch(url);
  const xmlCampData = await response.text();
  const convert = require('xml-js');
  const campObject = convert.xml2json(xmlCampData, {
    compact: false,
    spaces: 4
  });
  const parsedCampObject = JSON.parse(campObject);
  return parsedCampObject.elements;
};
