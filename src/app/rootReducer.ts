import { combineReducers } from '@reduxjs/toolkit';

import locationReducer from '../features/time-loc/locationSlice';
import timerReducer from '../features/time-loc/timer/timerSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
