import { createStore, combineReducers } from 'redux';

import stopwatchReducer from './components/Stopwatch/reducers';
import globalTimeReducer from './components/GlobalTime/reducers';
import contentLoadReducer from './components/ContentLoad/reducers';

export default createStore(combineReducers({
  stopwatch: stopwatchReducer,
  globalTime: globalTimeReducer,
  contentLoad: contentLoadReducer,
}));
