import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Campsite } from './index';
import { getCampsite } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';
import {
  currentWeatherMock,
  facilityIDMock,
  contractIDMock,
  tenDayWeatherMock,
  tenHourWeatherMock,
  campObjectMock,
  mockText
} from './mockCampsiteData';

describe('Campsite Container', () => {
  let wrapper;
  let addCurrentWeatherMock = jest.fn();
  let addTenHourWeatherMock = jest.fn();
  let addTenDayWeatherMock = jest.fn();

  beforeEach(async () => {
    campObjectMock;
    mockText;
    wrapper = shallow(
      <Campsite
        currentWeather={currentWeatherMock}
        tenHourWeather={tenHourWeatherMock}
        tenDayWeather={tenDayWeatherMock}
        addCurrentWeather={addCurrentWeatherMock}
        addTenDayWeather={addTenDayWeatherMock}
        addTenHourWeather={addTenHourWeatherMock}
        facilityID={facilityIDMock}
        contractID={contractIDMock}
      />
    );
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(campObjectMock),
        text: () => Promise.resolve(mockText)
      })
    );
  });

  it('should match the snapshot', () => {
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
    it('should call dispatch with an addCurrentWeather action when addCurrentWeather is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addCurrentWeather({ location: 'Denver' });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addCurrentWeather({ location: 'Denver' });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call dispatch with an addTenHourWeather action when addTenHourWeather is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addTenHourWeather([{ time: '9:00PM' }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addTenHourWeather([{ time: '9:00PM' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call dispatch with an addTenDayWeather action when addTenDayWeather is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addTenDayWeather([{ day: 'Friday' }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addTenDayWeather([{ day: 'Friday' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
