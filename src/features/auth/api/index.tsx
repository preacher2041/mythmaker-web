import { baseApi } from '@/lib/rtkQuery/baseApi';

import { ProfileResponse } from '../types';

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserDetails: builder.query<ProfileResponse, void>({
			query: () => ({
				url: 'auth/me',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetUserDetailsQuery } = authApi;
