export const tenDayWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEN_DAY_WEATHER':
      return action.tenDayWeather;
    default:
      return state;
  }
};
