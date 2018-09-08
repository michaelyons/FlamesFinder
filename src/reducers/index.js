import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  currentWeather: weatherReducer,
  fiveDayWeather: weatherReducer,
  tenHourWeather: weatherReducer
});

export default rootReducer;
