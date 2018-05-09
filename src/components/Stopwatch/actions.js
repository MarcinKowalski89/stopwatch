export const startStopwatch = () => ({
  type: 'START_STOPWATCH',
});
export const stopStopwatch = () => ({
  type: 'STOP_STOPWATCH',
});
export const addResult = time => ({
  type: 'ADD_RESULT',
  data: time,
});
export const resetResults = () => ({
  type: 'RESET_RESULTS',
});
