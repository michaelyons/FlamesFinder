export const campsiteReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_CAMPSITES':
      return action.campsites;
    default:
      return state;
  }
};
