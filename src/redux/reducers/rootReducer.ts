import { combineReducers } from 'redux';

import countReducer from './countReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  count: countReducer,
  timer: timerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
