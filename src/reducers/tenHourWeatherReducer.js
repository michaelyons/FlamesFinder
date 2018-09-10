export const tenHourWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEN_HOUR_WEATHER':
      return action.tenHourWeather;
    default:
      return state;
  }
};
