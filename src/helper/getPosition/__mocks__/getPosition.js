export const mockPosition = {
  coords: {
    accuracy: 39,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 39,
    longitude: -104,
    speed: null
  }
};

export const getCurrentPosition = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockPosition);
});
