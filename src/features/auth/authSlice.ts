import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthUserType = {
  email: string;
  username: string;
};

interface AuthState {
  existingUser: boolean;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  _id: number;
  _email: string;
  _username: string;
  users: AuthUserType[];
  currentAuthUser: AuthUserType;
  currentTheme: boolean;
}

const authInitialState: AuthState = {
  existingUser: false,
  isAuth: false,
  isLoading: false,
  error: null,
  _id: 0,
  _email: '',
  _username: '',
  users: [],
  currentAuthUser: { email: '', username: '' },
  currentTheme: false,
};

function startLoading(state: AuthState) {
  state.isLoading = true;
}

function loadingFailed(state: AuthState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const auth = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    getAuthStart: startLoading,
    setAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    getAuthFailure: loadingFailed,
    loginUser: (state, action: PayloadAction<AuthUserType>) => {
      state.currentAuthUser.email = action.payload.email;
      state.currentAuthUser.username = action.payload.username;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.existingUser = false;
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state._id = 0;
      state._email = '';
      state._username = '';
      state.users = [];
      state.currentAuthUser = { email: '', username: '' };
      state.currentTheme = false;
    },
    setExistingUser: (state, action: PayloadAction<boolean>) => {
      state.existingUser = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state._email = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state._username = action.payload;
    },
    updateId: (state, action: PayloadAction<number>) => {
      state._id = action.payload;
    },
  },
});

export const {
  getAuthStart,
  setAuth,
  getAuthFailure,
  loginUser,
  logoutUser,
  setExistingUser,
  updateId,
  updateEmail,
  updateUsername,
} = auth.actions;
export default auth.reducer;
