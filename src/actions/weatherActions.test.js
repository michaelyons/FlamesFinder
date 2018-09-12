import * as actions from '../actions/weatherActions';

describe('Weather Actions', () => {
  it('should display current weather', () => {
    const currentWeather = {
      location: 'Sheridan',
      currentTemp: '61°F',
      humidity: '63%'
    };
    const expected = {
      type: 'ADD_CURRENT_WEATHER',
      currentWeather: currentWeather
    };
    const result = actions.addCurrentWeather(currentWeather);
    expect(result).toEqual(expected);
  });
  it('should display ten hour weather', () => {
    const tenHourWeather = [
      {
        time: '8:00 AM',
        temp: '64°F',
        feelsLike: '64°F',
        averageHumidity: '29%',
        condition: 'Clear',
        averageWind: 'WSW 7',
        uvIndex: '0/10',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
      },
      {
        time: '9:00 AM',
        temp: '71°F',
        feelsLike: '71°F',
        averageHumidity: '23%',
        condition: 'Clear',
        averageWind: 'WSW 7',
        uvIndex: '2/10',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
      }
    ];
    const expected = {
      type: 'ADD_TEN_HOUR_WEATHER',
      tenHourWeather
    };
    const result = actions.addTenHourWeather(tenHourWeather);
    expect(result).toEqual(expected);
  });
  it('should display ten day weather', () => {
    const tenDayWeather = [
      {
        day: 'Wednesday',
        date: '9/12/2018',
        high: '92°F',
        low: '62°F',
        icon: 'http://icons.wxug.com/i/c/k/clear.gif',
        conditions: 'Clear',
        averageWind: 'S 8 MPH'
      },
      {
        day: 'Thursday',
        date: '9/13/2018',
        high: '92°F',
        low: '62°F',
        icon: 'http://icons.wxug.com/i/c/k/clear.gif',
        conditions: 'Clear',
        averageWind: 'SSE 6 MPH'
      }
    ];
    const expected = {
      type: 'ADD_TEN_DAY_WEATHER',
      tenDayWeather
    };
    const result = actions.addTenDayWeather(tenDayWeather);
    expect(result).toEqual(expected);
  });
});
