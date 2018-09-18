import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './index';

describe('Header', () => {
  let wrapper;
  let history;
  let mockGoback;

  beforeEach(() => {
    mockGoback = jest.fn();
    history = {
      goBack: mockGoback
    };

    wrapper = shallow(<Header history={history} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go back on click', () => {
    wrapper.find('.go-back').simulate('click');
    expect(mockGoback).toHaveBeenCalled();
  });
});
