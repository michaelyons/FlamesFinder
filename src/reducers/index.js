import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  currentWeather: weatherReducer
});

export default rootReducer;
