import { campsiteReducer } from '../campsiteReducer';

describe('campsiteReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = campsiteReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return state with the campsite data added', () => {
    const mockState = [];

    const mockAction = {
      type: 'POPULATE_CAMPSITES',
      campsites: {
        type: 'element',
        name: 'result'
      }
    };

    const expected = {
      type: 'element',
      name: 'result'
    };

    const result = campsiteReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
