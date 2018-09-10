export const currentWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_WEATHER':
      return action.currentWeather;
    default:
      return state;
  }
};
