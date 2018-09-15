export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_LOCATION':
      return action.location;
    default:
      return state;
  }
};
