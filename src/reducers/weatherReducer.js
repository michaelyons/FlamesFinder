export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_WEATHER':
      return [...state, action.currentWeather];
    default:
      return state;
  }
};
