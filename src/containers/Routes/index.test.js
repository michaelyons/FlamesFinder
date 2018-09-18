import React from 'react';
import { shallow } from 'enzyme';

import Routes from './index';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
