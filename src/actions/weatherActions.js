export const addCurrentWeather = currentWeather => ({
  type: 'ADD_CURRENT_WEATHER',
  currentWeather
});

export const addTenHourWeather = tenHourWeather => ({
  type: 'ADD_TEN_HOUR_WEATHER',
  tenHourWeather
});

export const addTenDayWeather = tenDayWeather => ({
  type: 'ADD_TEN_DAY_WEATHER',
  tenDayWeather
});
