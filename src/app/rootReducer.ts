import { combineReducers } from '@reduxjs/toolkit';

import locationReducer from '../screens/more/locationSlice';
import timerReducer from '../screens/more/timer/timerSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
