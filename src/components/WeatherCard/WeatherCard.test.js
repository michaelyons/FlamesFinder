import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherCard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
