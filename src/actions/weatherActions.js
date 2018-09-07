export const addCurrentWeather = currentWeather => ({
  type: 'ADD_CURRENT_WEATHER',
  currentWeather
});

export const addFiveDayWeather = fiveDayWeather => ({
  type: 'ADD_FIVE_DAY_WEATHER',
  fiveDayWeather
});
