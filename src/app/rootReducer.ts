import { combineReducers } from '@reduxjs/toolkit';

import locationReducer from '../features/more/locationSlice';
import timerReducer from '../features/more/timer/timerSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
