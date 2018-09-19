import {
  currentWeatherMock,
  tenHourWeatherMock,
  tenDayWeatherMock,
  mockGetCampsiteReturn
} from '../mockFetchData';

export const allWeatherData = jest.fn().mockImplementation(() =>
  Promise.resolve({
    currentWeatherMock,
    tenHourWeatherMock,
    tenDayWeatherMock
  })
);

export const getCampsite = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockGetCampsiteReturn));

export const getCampsiteData = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockGetCampsiteListReturn));
