import { combineReducers } from 'redux';
import { currentWeatherReducer } from './currentWeatherReducer';
import { tenHourWeatherReducer } from './tenHourWeatherReducer';
import { tenDayWeatherReducer } from './tenDayWeatherReducer';
import { campsiteReducer } from './campsiteReducer';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  tenHourWeather: tenHourWeatherReducer,
  tenDayWeather: tenDayWeatherReducer,
  campsites: campsiteReducer
});

export default rootReducer;
