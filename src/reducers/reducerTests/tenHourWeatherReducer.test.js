import { tenHourWeatherReducer } from '../tenHourWeatherReducer';

describe('tenHourWeatherreducer', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = tenHourWeatherReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return state with ten hour weather added', () => {
    const mockState = [];

    const mockAction = {
      type: 'ADD_TEN_HOUR_WEATHER',
      tenHourWeather: [
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
      ]
    };

    const expected = [
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

    const result = tenHourWeatherReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
