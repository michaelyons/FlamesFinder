import React from 'react';
import { shallow } from 'enzyme';

import LoadingFire2 from './LoadingFire2';

describe('LoadingFire2', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingFire2 />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
