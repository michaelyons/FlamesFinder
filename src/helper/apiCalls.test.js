import {
  getCurrentWeatherData,
  getTenHourWeatherData,
  getTenDayWeatherData,
  getCampsite,
  googleMap,
  cleanCurrentWeather,
  cleanTenHourWeather,
  cleanTenDayWeather
} from './apiCalls';

import {
  currentWeatherMock,
  tenHourWeatherMock,
  tenDayWeatherMock,
  getCampsiteDataMock,
  campObjectMock,
  mockImage
} from './mockFetchData';

import { key, key2, key3, key4 } from '../variables';

describe('API calls', () => {
  describe('getCurrentWeatherData', () => {
    beforeEach(() => {
      currentWeatherMock;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(currentWeatherMock)
        })
      );
    });

    it('should make a fetch call with the correct params', () => {
      getCurrentWeatherData();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?lat=undefined&lon=undefined&us&units=imperial&APPID=${key}`
      );
    });
  });

  describe('getTenHourWeatherData', () => {
    beforeEach(() => {
      tenHourWeatherMock;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(tenHourWeatherMock)
        })
      );
    });

    it('should make a fetch call with the correct params', () => {
      getTenHourWeatherData();
      expect(window.fetch).toHaveBeenCalledWith(
        `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/undefined,undefined.json`
      );
    });
  });

  describe('tenDayWeatherData', () => {
    beforeEach(() => {
      tenDayWeatherMock;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(tenDayWeatherMock)
        })
      );
    });

    it('should make a fetch with the correct params', () => {
      getTenDayWeatherData();
      expect(window.fetch).toHaveBeenCalledWith(
        `http://api.wunderground.com/api/${key2}/geolookup/conditions/hourly/forecast10day/q/undefined,undefined.json`
      );
    });
  });

  describe.skip('getCampsite fetch', () => {
    beforeEach(() => {
      getCampsiteDataMock;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(campObjectMock)
        })
      );
    });
    it.skip('should make a fetch with the correct params', () => {
      getCampsite();
      expect(window.fetch).toHaveBeenCalledWith(
        `http://api.amp.active.com/camping/campground/details?contractCode=CO&parkId=undefined&api_key=${key3}`
      );
    });
  });

  describe.skip('googleMap fetch', () => {
    beforeEach(() => {
      mockImage;
      window.fetch = jest.fn().mockImplementation(() => {
        Promise.resolve({
          blob: () => Promise.resolve(mockImage)
        });
      });
    });
    it('should make a fetch with the corret params', () => {
      googleMap();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://maps.googleapis.com/maps/api/staticmap?center=Denver,CO&zoom=8.8&size=350x350&markers=color:red%7Clabel:%7C39.7508006,-104.9987834&markers=color:blue%7Clabel:1%7C39.6287,-104.8418&markers=color:blue%7Clabel:2%7C39.5431,-105.0648&markers=color:blue%7Clabel:3%7C39.8414,-105.4198&markers=color:blue%7Clabel:4%7C39.39167,-105.10889&markers=color:blue%7Clabel:5%7C39.67889,-105.49278&markers=color:blue%7Clabel:6%7C39.5100,-105.3944&key=${key4}`
      );
    });
  });

  describe('cleanCurrentWeather', () => {
    it('should return a currentWeather object', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(currentWeatherMock)
        })
      );
      const expected = {
        currentConditions: 'Clear Sky',
        currentTemp: '56°F',
        highTemp: '61°F',
        humidity: '69%',
        location: 'Sheridan',
        lowTemp: '51°F',
        sunrise: '6:37:49 AM',
        sunset: '7:16:27 PM',
        visibility: '10.00 Miles',
        windDirection: 'WSW',
        windSpeed: '4.97 MPH'
      };
      const result = await cleanCurrentWeather(39.65, -105.19);
      expect(result).toEqual(expected);
    });
  });
  describe('cleanTenHourWeather', () => {
    it('should return a tenHourWeather object', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(tenHourWeatherMock)
        })
      );
      const expected = [
        {
          averageHumidity: '24%',
          averageWind: 'ENE 3',
          condition: 'Partly Cloudy',
          feelsLike: '74°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '74°F',
          time: '10:00 AM',
          uvIndex: '3/10'
        },
        {
          averageHumidity: '21%',
          averageWind: 'E 4',
          condition: 'Partly Cloudy',
          feelsLike: '78°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '78°F',
          time: '11:00 AM',
          uvIndex: '5/10'
        },
        {
          averageHumidity: '18%',
          averageWind: 'E 5',
          condition: 'Partly Cloudy',
          feelsLike: '81°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '81°F',
          time: '12:00 PM',
          uvIndex: '7/10'
        },
        {
          averageHumidity: '16%',
          averageWind: 'E 5',
          condition: 'Partly Cloudy',
          feelsLike: '83°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '83°F',
          time: '1:00 PM',
          uvIndex: '7/10'
        },
        {
          averageHumidity: '14%',
          averageWind: 'E 5',
          condition: 'Partly Cloudy',
          feelsLike: '84°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '84°F',
          time: '2:00 PM',
          uvIndex: '7/10'
        },
        {
          averageHumidity: '14%',
          averageWind: 'E 5',
          condition: 'Partly Cloudy',
          feelsLike: '85°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '85°F',
          time: '3:00 PM',
          uvIndex: '5/10'
        },
        {
          averageHumidity: '15%',
          averageWind: 'SE 6',
          condition: 'Partly Cloudy',
          feelsLike: '84°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '84°F',
          time: '4:00 PM',
          uvIndex: '3/10'
        },
        {
          averageHumidity: '15%',
          averageWind: 'SE 6',
          condition: 'Partly Cloudy',
          feelsLike: '85°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '85°F',
          time: '5:00 PM',
          uvIndex: '2/10'
        },
        {
          averageHumidity: '16%',
          averageWind: 'SSE 7',
          condition: 'Partly Cloudy',
          feelsLike: '83°F',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          temp: '83°F',
          time: '6:00 PM',
          uvIndex: '0/10'
        },
        {
          averageHumidity: '18%',
          averageWind: 'S 6',
          condition: 'Clear',
          feelsLike: '80°F',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          temp: '80°F',
          time: '7:00 PM',
          uvIndex: '0/10'
        }
      ];
      const result = await cleanTenHourWeather(39.65, -105.19);
      expect(result).toEqual(expected);
    });
  });
});
