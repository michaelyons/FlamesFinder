import { combineReducers } from 'redux';
import { currentWeatherReducer } from './currentWeatherReducer';
import { tenHourWeatherReducer } from './tenHourWeatherReducer';
import { tenDayWeatherReducer } from './tenDayWeatherReducer';
import { locationReducer } from './locationReducer';
import { campsiteReducer } from './campsiteReducer';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  tenHourWeather: tenHourWeatherReducer,
  tenDayWeather: tenDayWeatherReducer,
  currentLocation: locationReducer,
  campsites: campsiteReducer
});

export default rootReducer;
