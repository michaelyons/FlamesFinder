import {
  currentWeatherCleaner,
  tenHourWeatherCleaner,
  tenDayWeatherCleaner
} from './cleaners';

import { cleanLocationImage } from './imgCleaner';
import { getCurrentPosition } from '../helper/getPosition/getPosition';

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
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&us&units=imperial&APPID=${
    process.env.REACT_APP_CURRENTWEATHERKEY
  }`;
  const response = await fetch(url);
  const currentCityWeather = await response.json();
  return currentCityWeather;
};

export const getTenHourWeatherData = async (lat, long) => {
  const url = `https://api.wunderground.com/api/${
    process.env.REACT_APP_FORECASTWEATHERKEY
  }/geolookup/conditions/hourly/forecast10day/q/${lat},${long}.json`;
  const response = await fetch(url);
  const tenHourWeather = await response.json();
  return tenHourWeather;
};

export const getTenDayWeatherData = async (lat, long) => {
  const url = `https://api.wunderground.com/api/${
    process.env.REACT_APP_FORECASTWEATHERKEY
  }/geolookup/conditions/hourly/forecast10day/q/${lat},${long}.json`;
  const response = await fetch(url);
  const tenDayWeather = await response.json();
  return tenDayWeather;
};

export const getCampsiteData = async () => {
  const position = await getCurrentPosition();
  const { latitude, longitude } = position.coords;
  const url = `https://cors-anywhere.herokuapp.com/https://api.amp.active.com/camping/campgrounds?api_key=${
    process.env.REACT_APP_CAMPSITEKEY
  }&landmarkName=true&landmarkLat=${latitude}&landmarkLong=${longitude}&xml=true&origin=*`;
  console.log(url);
  const response = await fetch(url);
  const xmlCampData = await response.text();
  const convert = require('xml-js');
  const xml = xmlCampData;
  const campObject = convert.xml2json(xml, { compact: false, spaces: 2 });
  const parsedCampObject = JSON.parse(campObject);
  return parsedCampObject.elements[0].elements;
};

export const getCampsite = async (contractID, facilityID) => {
  const url = `https://cors-anywhere.herokuapp.com/http://api.amp.active.com/camping/campground/details?contractCode=${contractID}&parkId=${facilityID}&api_key=${
    process.env.REACT_APP_CAMPSITEKEY
  }`;
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

export const googleMap = async () => {
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${
    process.env.REACT_APP_GOOGLEKEY
  }&zoom=8.8&size=350x350&markers=color:red%7Clabel:%7C39.7508006,-104.9987834&markers=color:blue%7Clabel:1%7C39.6287,-104.8418&markers=color:blue%7Clabel:2%7C39.5431,-105.0648&markers=color:blue%7Clabel:3%7C39.8414,-105.4198&markers=color:blue%7Clabel:4%7C39.39167,-105.10889&markers=color:blue%7Clabel:5%7C39.67889,-105.49278&markers=color:blue%7Clabel:6%7C39.5100,-105.3944`;
  const response = await fetch(url);
  const data = await response.blob();
  const cleanImage = await cleanLocationImage(data);
  return cleanImage;
};
