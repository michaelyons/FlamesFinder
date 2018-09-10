import { combineReducers } from 'redux';
import { currentWeatherReducer } from './currentWeatherReducer';
import { tenHourWeatherReducer } from './tenHourWeatherReducer';
import { tenDayWeatherReducer } from './tenDayWeatherReducer';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  tenHourWeather: tenHourWeatherReducer,
  tenDayWeather: tenDayWeatherReducer
});

export default rootReducer;
