export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_WEATHER':
      return [...state, action.currentWeather];
    case 'ADD_FIVE_DAY_WEATHER':
      return [...state, action.fiveDayWeather];
    default:
      return state;
  }
};
