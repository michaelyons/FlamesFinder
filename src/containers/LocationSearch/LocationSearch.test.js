import React from 'react';
import { shallow } from 'enzyme';
import {
  mapStateToProps,
  mapDispatchToProps,
  LocationSearch
} from './LocationSearch';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';

describe('LocationSearch Container', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<LocationSearch />);
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return a current object, a tenHour array, and a tenDay array', () => {
      const mockState = {
        currentWeather: {
          location: 'Denver'
        },
        tenHourWeather: [
          {
            time: '8:00 AM',
            temp: '64°F',
            feelsLike: '64°F',
            averageHumidity: '29%',
            condition: 'Clear',
            averageWind: 'WSW 7',
            uvIndex: '0/10',
            icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
          }
        ],
        tenDayWeather: [
          {
            day: 'Wednesday',
            date: '9/12/2018',
            high: '92°F',
            low: '62°F',
            icon: 'http://icons.wxug.com/i/c/k/clear.gif',
            conditions: 'Clear',
            averageWind: 'S 8 MPH'
          }
        ]
      };

      const expected = {
        currentWeather: {
          location: 'Denver'
        },
        tenHourWeather: [
          {
            time: '8:00 AM',
            temp: '64°F',
            feelsLike: '64°F',
            averageHumidity: '29%',
            condition: 'Clear',
            averageWind: 'WSW 7',
            uvIndex: '0/10',
            icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
          }
        ],
        tenDayWeather: [
          {
            day: 'Wednesday',
            date: '9/12/2018',
            high: '92°F',
            low: '62°F',
            icon: 'http://icons.wxug.com/i/c/k/clear.gif',
            conditions: 'Clear',
            averageWind: 'S 8 MPH'
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch with an addCurrentWeather action when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addCurrentWeather({ location: 'Denver' });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addCurrentWeather({ location: 'Denver' });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
