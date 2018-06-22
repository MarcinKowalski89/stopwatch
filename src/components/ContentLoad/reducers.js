const initialState = {
  isLoaded: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: true,
      };
    case 'UNSET_LOADED':
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
};
