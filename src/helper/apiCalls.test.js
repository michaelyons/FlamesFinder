// import {
//   getCurrentWeatherData,
//   getTenHourWeatherData,
//   getTenDayWeatherData
// } from './apiCalls';

// import {
//   currentWeatherMock,
//   tenHourWeatherMock,
//   tenDayWeatherMock
// } from './mockFetchData';

// import { key, key2 } from '../variables';

// describe('API calls', () => {
//   describe('getCurrentWeatherData', () => {
//     beforeEach(() => {
//       currentWeatherMock;
//       window.fetch = jest.fn().mockImplementation(() =>
//         Promise.resolve({
//           json: () => Promise.resolve(currentWeatherMock)
//         })
//       );
//     });

//     it('should make a fetch call with the correct params', () => {
//       getCurrentWeatherData();
//       expect(window.fetch).toHaveBeenCalledWith(
//         `https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&APPID=${key}`
//       );
//     });
//   });

//   describe('getTenHourWeatherData', () => {
//     beforeEach(() => {
//       tenHourWeatherMock;
//       window.fetch = jest.fn().mockImplementation(() =>
//         Promise.resolve({
//           json: () => Promise.resolve(tenHourWeatherMock)
//         })
//       );
//     });

//     it('should make a fetch call with the correct params', () => {
//       getTenHourWeatherData();
//       expect(window.fetch).toHaveBeenCalledWith(
//         `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/80228.json`
//       );
//     });
//   });

//   describe('tenDayWeatherData', () => {
//     beforeEach(() => {
//       tenDayWeatherMock;
//       window.fetch = jest.fn().mockImplementation(() =>
//         Promise.resolve({
//           json: () => Promise.resolve(tenDayWeatherMock)
//         })
//       );
//     });

//     it('should make a fetch with the correct params', () => {
//       getTenDayWeatherData();
//       expect(window.fetch).toHaveBeenCalledWith(
//         `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/80228.json`
//       );
//     });
//   });
// });
