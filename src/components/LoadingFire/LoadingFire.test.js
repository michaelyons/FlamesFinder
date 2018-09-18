import React from 'react';
import { shallow } from 'enzyme';

import LoadingFire from './LoadingFire';

describe('LoadingFire', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingFire />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
