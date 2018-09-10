import {
  getCurrentWeatherData,
  getTenHourWeatherData,
  getTenDayWeatherData
} from './apiCalls';

import { key, key2 } from '../variables';

describe('API calls', () => {
  let mockWeatherResponse;

  describe('getCurrentWeatherData', () => {
    beforeEach(() => {
      mockWeatherResponse = {
        coord: { lon: -105.19, lat: 39.65 },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
        ],
        base: 'stations',
        main: {
          temp: 55.92,
          pressure: 1020,
          humidity: 69,
          temp_min: 50.72,
          temp_max: 60.8
        },
        visibility: 16093,
        wind: { speed: 4.97, deg: 255.5 },
        clouds: { all: 1 },
        dt: 1536582960,
        sys: {
          type: 1,
          id: 602,
          message: 0.0155,
          country: 'US',
          sunrise: 1536583069,
          sunset: 1536628587
        },
        id: 420005679,
        name: 'Sheridan',
        cod: 200
      };
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockWeatherResponse)
        })
      );
    });

    it('should make a fetch call with the correct params', () => {
      getCurrentWeatherData();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&APPID=${key}`
      );
    });

    // it('should return an object if the response is okay', () => {

    // });
  });
});
