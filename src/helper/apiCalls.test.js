import {
  getCurrentWeatherData,
  getTenHourWeatherData,
  getTenDayWeatherData,
  getCampsite,
  getCampsiteData,
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
  mockImage,
  mockText,
  mockResponseBlob
} from './mockFetchData';

import {
  contractIDMock,
  facilityIDMock
} from '../containers/Campsite/mockCampsiteData';

import { key, key2, key3, key4 } from '../variables';
jest.mock('./imgCleaner');
import { getCurrentPosition } from '../helper/getPosition/getPosition';
jest.mock('../helper/getPosition/getPosition');

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

  describe('getCampsite fetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(campObjectMock),
          text: () => Promise.resolve(mockText)
        })
      );
    });
    it('should make a fetch with the correct params', () => {
      getCampsite(contractIDMock, facilityIDMock);
      expect(window.fetch).toHaveBeenCalledWith(
        `https://cors-anywhere.herokuapp.com/http://api.amp.active.com/camping/campground/details?contractCode=NRSO&parkId=148541&api_key=${key3}`
      );
    });
  });

  describe('getCampsiteData fetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getCampsiteDataMock),
          text: () => Promise.resolve(mockText)
        })
      );
    });

    it('should call currentPosition', () => {
      getCampsiteData();
      expect(getCurrentPosition).toHaveBeenCalled();
    });

    it('should make a fetch with the correct params', async () => {
      await getCampsiteData();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://cors-anywhere.herokuapp.com/http://api.amp.active.com/camping/campgrounds?contractCode=CO&landmarkName=true&landmarkLat=39&landmarkLong=-104&xml=true&api_key=${key3}`
      );
    });
  });

  describe('googleMap fetch', () => {
    beforeEach(() => {
      mockResponseBlob;
      mockImage;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          blob: () => Promise.resolve(mockImage),
          URL: { createObjectURL: () => mockImage }
        })
      );
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
        currentTemp: '80°F',
        currentWeather: 'Current Weather',
        highTemp: 'High 83°F',
        humidity: 'Humidity 29%',
        location: 'Dove Valley',
        lowTemp: 'Low 79°F',
        sunrise: 'Sunrise 6:44:55 AM',
        sunset: 'Sunset 6:59:57 PM',
        visibility: 'Visibility 10.00 Miles',
        windDirection: 'Wind Direction NE',
        windSpeed: 'Wind Speed 10.29 MPH'
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
          averageHumidity: '18%',
          averageWind: 'ENE 10',
          condition: 'Mostly Cloudy',
          feelsLike: '85°F',
          icon: 'mostlycloudy',
          temp: '85°F',
          time: '12:00 PM',
          uvIndex: '5/10'
        },
        {
          averageHumidity: '16%',
          averageWind: 'ENE 12',
          condition: 'Mostly Cloudy',
          feelsLike: '86°F',
          icon: 'mostlycloudy',
          temp: '86°F',
          time: '1:00 PM',
          uvIndex: '5/10'
        },
        {
          averageHumidity: '15%',
          averageWind: 'ENE 13',
          condition: 'Overcast',
          feelsLike: '88°F',
          icon: 'cloudy',
          temp: '88°F',
          time: '2:00 PM',
          uvIndex: '4/10'
        },
        {
          averageHumidity: '17%',
          averageWind: 'E 13',
          condition: 'Overcast',
          feelsLike: '87°F',
          icon: 'cloudy',
          temp: '87°F',
          time: '3:00 PM',
          uvIndex: '2/10'
        },
        {
          averageHumidity: '20%',
          averageWind: 'E 12',
          condition: 'Overcast',
          feelsLike: '84°F',
          icon: 'cloudy',
          temp: '84°F',
          time: '4:00 PM',
          uvIndex: '2/10'
        },
        {
          averageHumidity: '25%',
          averageWind: 'ENE 11',
          condition: 'Chance of a Thunderstorm',
          feelsLike: '82°F',
          icon: 'chancetstorms',
          temp: '82°F',
          time: '5:00 PM',
          uvIndex: '1/10'
        },
        {
          averageHumidity: '30%',
          averageWind: 'ENE 13',
          condition: 'Chance of a Thunderstorm',
          feelsLike: '79°F',
          icon: 'chancetstorms',
          temp: '79°F',
          time: '6:00 PM',
          uvIndex: '0/10'
        },
        {
          averageHumidity: '36%',
          averageWind: 'ENE 9',
          condition: 'Chance of a Thunderstorm',
          feelsLike: '75°F',
          icon: 'chancetstorms',
          temp: '75°F',
          time: '7:00 PM',
          uvIndex: '0/10'
        },
        {
          averageHumidity: '41%',
          averageWind: 'N 9',
          condition: 'Chance of a Thunderstorm',
          feelsLike: '72°F',
          icon: 'chancetstorms',
          temp: '72°F',
          time: '8:00 PM',
          uvIndex: '0/10'
        },
        {
          averageHumidity: '57%',
          averageWind: 'N 9',
          condition: 'Chance of a Thunderstorm',
          feelsLike: '68°F',
          icon: 'chancetstorms',
          temp: '68°F',
          time: '9:00 PM',
          uvIndex: '0/10'
        }
      ];
      const result = await cleanTenHourWeather(39.65, -105.19);
      expect(result).toEqual(expected);
    });
  });
  describe('cleanTenDayWeather', () => {
    it('should return a tenHourWeather object', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(tenDayWeatherMock)
        })
      );
      const expected = [
        {
          averageWind: 'ENE 13 MPH',
          conditions: 'Chance of a Thunderstorm',
          date: '9/19/2018',
          day: 'Wednesday',
          high: '88°F',
          icon: 'chancetstorms',
          low: '59°F'
        },
        {
          averageWind: 'NW 11 MPH',
          conditions: 'Partly Cloudy',
          date: '9/20/2018',
          day: 'Thursday',
          high: '82°F',
          icon: 'partlycloudy',
          low: '49°F'
        },
        {
          averageWind: 'SE 18 MPH',
          conditions: 'Clear',
          date: '9/21/2018',
          day: 'Friday',
          high: '73°F',
          icon: 'clear',
          low: '51°F'
        },
        {
          averageWind: 'SE 10 MPH',
          conditions: 'Clear',
          date: '9/22/2018',
          day: 'Saturday',
          high: '83°F',
          icon: 'clear',
          low: '55°F'
        },
        {
          averageWind: 'SE 9 MPH',
          conditions: 'Clear',
          date: '9/23/2018',
          day: 'Sunday',
          high: '85°F',
          icon: 'clear',
          low: '55°F'
        },
        {
          averageWind: 'NNW 10 MPH',
          conditions: 'Clear',
          date: '9/24/2018',
          day: 'Monday',
          high: '81°F',
          icon: 'clear',
          low: '48°F'
        },
        {
          averageWind: 'SE 11 MPH',
          conditions: 'Clear',
          date: '9/25/2018',
          day: 'Tuesday',
          high: '68°F',
          icon: 'clear',
          low: '45°F'
        },
        {
          averageWind: 'E 11 MPH',
          conditions: 'Clear',
          date: '9/26/2018',
          day: 'Wednesday',
          high: '69°F',
          icon: 'clear',
          low: '43°F'
        },
        {
          averageWind: 'SE 10 MPH',
          conditions: 'Clear',
          date: '9/27/2018',
          day: 'Thursday',
          high: '71°F',
          icon: 'clear',
          low: '43°F'
        },
        {
          averageWind: 'SE 11 MPH',
          conditions: 'Clear',
          date: '9/28/2018',
          day: 'Friday',
          high: '70°F',
          icon: 'clear',
          low: '44°F'
        }
      ];
      const result = await cleanTenDayWeather(39.65, -105.19);
      expect(result).toEqual(expected);
    });
  });
});
