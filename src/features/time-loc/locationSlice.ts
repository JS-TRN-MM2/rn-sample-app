import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  locServiceIsOn: boolean;
  isLoading: boolean;
  error: string | null;
}

// define the initial state using that type
const locInitialState: LocationState = {
  locServiceIsOn: false,
  isLoading: false,
  error: null,
};

function startLoading(state: LocationState) {
  state.isLoading = true;
}

function loadingFailed(state: LocationState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const location = createSlice({
  name: 'location',
  initialState: locInitialState,
  reducers: {
    getLocationStart: startLoading,
    setLocation: (state) => {
      state.locServiceIsOn = !state.locServiceIsOn;
    },
    getLocationFailure: loadingFailed,
  },
});

export const { getLocationStart, setLocation, getLocationFailure } = location.actions;
export default location.reducer;
