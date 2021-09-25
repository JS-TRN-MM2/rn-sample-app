import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthUserType = {
  email: string;
  username: string;
  password: string;
};

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  users: AuthUserType[];
  currentAuthUser: AuthUserType;
}

const authInitialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
  users: [],
  currentAuthUser: { email: '', username: '', password: '' },
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
      console.log('insideloginUser payload is ', action.payload);
      state.currentAuthUser.email = action.payload.email;
      state.currentAuthUser.username = action.payload.username;
      state.currentAuthUser.password = action.payload.password;
    },
    logoutUser: (state) => {
      state.currentAuthUser.email = '';
      state.currentAuthUser.username = '';
      state.currentAuthUser.password = '';
      //state.currentAuthUser.userToken = '';
      state.isLoading = false;
    },
  },
});

export const { getAuthStart, setAuth, getAuthFailure, loginUser, logoutUser } = auth.actions;
export default auth.reducer;
