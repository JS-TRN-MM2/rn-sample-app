import { combineReducers } from '@reduxjs/toolkit';

import locationReducer from '../features/my-day/locationSlice';
import timerReducer from '../features/my-day/timer/timerSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
