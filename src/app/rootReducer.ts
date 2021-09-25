import { combineReducers } from '@reduxjs/toolkit';

import locationReducer from '../features/more/locationSlice';
import timerReducer from '../features/more/timer/timerSlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  location: locationReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
