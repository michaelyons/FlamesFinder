import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import './setupTests';

describe('App', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = await shallow(<App />);
  });
  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
