import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/stores/store';

import { loginUser, registerUser } from './authAction';

interface AuthState {
	loading: boolean;
	userInfo: any;
	accessToken: string | null;
	error: any;
	success: boolean;
}

const accessToken = localStorage.getItem('accessToken')
	? localStorage.getItem('accessToken')
	: null;

const initialState = {
	loading: false,
	userInfo: null, // for user object
	accessToken, // for storing the JWT
	error: null,
	success: false, // for monitoring the registration process.
} as AuthState;

export const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('accessToken');
			state.loading = false;
			state.userInfo = null;
			state.accessToken = null;
			state.error = null;
		},
		setCredentials: (state, { payload }) => {
			state.userInfo = payload.data;
		},
	},
	extraReducers: (builder) => {
		// login user
		builder.addCase(loginUser.pending, (state) => {
			state.loading = true;
			state.error = null;
		}),
			builder.addCase(loginUser.fulfilled, (state, action) => {
				const { payload } = action;
				state.loading = false;
				state.userInfo = payload.data;
				state.accessToken = payload.data.accessToken;
			}),
			builder.addCase(loginUser.rejected, (state, action) => {
				const { payload } = action;
				state.loading = false;
				state.error = payload;
			}),
			// register user
			builder.addCase(registerUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			}),
			builder.addCase(registerUser.fulfilled, (state) => {
				state.loading = false;
				state.success = true; // registration successful
			}),
			builder.addCase(registerUser.rejected, (state, action) => {
				const { payload } = action;
				state.loading = false;
				state.error = payload;
			});
	},
});

export const { logout, setCredentials } = AuthSlice.actions;

export const selectUserInfo = (state: RootState) => state.auth.userInfo;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthSuccess = (state: RootState) => state.auth.success;

export default AuthSlice.reducer;
