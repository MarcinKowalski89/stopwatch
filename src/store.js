import { createStore, combineReducers } from 'redux';

import stopwatchReducer from './components/Stopwatch/reducers';

export default createStore(combineReducers({
  stopwatch: stopwatchReducer,
}));
