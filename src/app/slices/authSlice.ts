import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthMainModel} from '../models/authModel';
import {RegisterAction} from '../actions/authAction';

export interface AuthState {
  registerItem: AuthMainModel;
  token: String;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  registerItem: {} as AuthMainModel,
  token: '',
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer action

    login: (state, action: PayloadAction<{token: string}>) => {
      state.registerItem.user.token = action.payload.token;
      state.errorMessage = 'Login success';
      state.isLoading = false;
    },
    logout: state => {
      state.registerItem.user.token = '';
      state.errorMessage = 'Logout success';
      state.isLoading = false;
    },
  },
  extraReducers: function (builder) {
    // Register
    builder.addCase(RegisterAction.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(
      RegisterAction.fulfilled,
      (state, action: PayloadAction<AuthMainModel>) => {
        state.isLoading = false;
        const newPayload = action.payload;
        if (newPayload) {
          state.isError = false;
          state.registerItem = newPayload;
          state.errorMessage = 'Registration success';
        }
      },
    );

    builder.addCase(RegisterAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'Registration failed';
    });
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
