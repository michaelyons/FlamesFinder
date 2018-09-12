import { currentWeatherReducer } from '../currentWeatherReducer';

describe('currentWeatherReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = currentWeatherReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with the current weather added', () => {
    const mockState = {};

    const mockAction = {
      type: 'ADD_CURRENT_WEATHER',
      currentWeather: {
        location: 'Sheridan',
        currentTemp: '61°F',
        humidity: '63%'
      }
    };

    const expected = {
      location: 'Sheridan',
      currentTemp: '61°F',
      humidity: '63%'
    };

    const result = currentWeatherReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
