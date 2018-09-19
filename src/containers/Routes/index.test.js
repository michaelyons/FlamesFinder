import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { Routes } from './index';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /campsites', () => {
    <MemoryRouter initialEntries={['/campsites']}>
      <Routes />
    </MemoryRouter>;
    expect(wrapper).toMatchSnapshot();
  });
});
