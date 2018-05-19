const initialState = {
  isRunning: false,
  results: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_STOPWATCH':
      return {
        ...state,
        isRunning: true,
      };
    case 'STOP_STOPWATCH':
      return {
        ...state,
        isRunning: false,
      };
    case 'ADD_RESULT':
    console.log(state.results)
      return {
        ...state,
        results: state.results.concat(action.data),
      };
    case 'RESET_RESULTS':
      return {
        ...state,
        results: [],
      };
    default:
      return state;
  }
};
