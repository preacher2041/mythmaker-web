import { createAsyncThunk } from '@reduxjs/toolkit';

import { BACKEND_URL } from '@/config';

import { LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse } from '../types';

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		const requestData = {
			email,
			password,
		};

		try {
			const response = await fetch(`${BACKEND_URL}auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestData),
			});

			if (!response.ok) {
				throw new Error('Error');
			}

			const responseData = await response.json();

			localStorage.setItem('accessToken', responseData.data.accessToken);

			return responseData;
		} catch (error: any) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const registerUser = createAsyncThunk<RegistrationResponse, RegistrationRequest>(
	'auth/register',
	async ({ username, email, firstName, lastName, dob, password }, { rejectWithValue }) => {
		const requestData = {
			username,
			email,
			firstName,
			lastName,
			dob,
			password,
		};

		try {
			const response = await fetch(`${BACKEND_URL}auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestData),
			});

			if (!response.ok) {
				throw new Error('Error');
			}

			const responseData = await response.json();

			return responseData;
		} catch (error: any) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
