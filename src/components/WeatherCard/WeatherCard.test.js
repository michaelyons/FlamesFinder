import React from 'react';
import { shallow } from 'enzyme';
import {
  currentWeatherMock,
  tenHourWeatherMock,
  tenDayWeatherMock
} from '../../containers/Campsite/mockCampsiteData';

import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WeatherCard
        currentWeather={currentWeatherMock}
        tenHourWeather={tenHourWeatherMock}
        tenDayWeather={tenDayWeatherMock}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when no data available', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
