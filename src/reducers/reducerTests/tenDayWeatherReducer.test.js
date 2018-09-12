import { tenDayWeatherReducer } from '../tenDayWeatherReducer';
import { addTenDayWeather } from '../../actions/weatherActions';

describe('tenHourWeatherReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = tenDayWeatherReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return state with ten hour weather added', () => {
    const mockState = [];

    const mockAction = {
      type: 'ADD_TEN_DAY_WEATHER',
      tenDayWeather: [
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
      ]
    };

    const expected = [
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

    const result = tenDayWeatherReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
