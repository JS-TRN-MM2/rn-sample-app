/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  timerIsOn: boolean;
  isLoading: boolean;
  error: string | null;
}

// define the initial state using that type
const timerInitialState: TimerState = {
  timerIsOn: false,
  isLoading: false,
  error: null,
};

function startLoading(state: TimerState) {
  state.isLoading = true;
}

function loadingFailed(state: TimerState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const timerSlice = createSlice({
  name: 'timer',
  initialState: timerInitialState,
  reducers: {
    getTimerStart: startLoading,
    setTimer: (state) => {
      state.timerIsOn = !state.timerIsOn;
    },
    getTimerFailure: loadingFailed,
  },
});

export const { getTimerStart, setTimer, getTimerFailure } = timerSlice.actions;

export default timerSlice.reducer;

