import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import storage from '@/utils/storage';

import { useLoginUserMutation } from '../api/authApi';
import { LoginRequest, UserResponse } from '../types';

const initialValues = {
	email: '',
	password: '',
};

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	password: Yup.string().label('Password').required(),
});

export const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginUser, { data, isSuccess, isError, error }] = useLoginUserMutation();

	useEffect(() => {
		if (isSuccess) {
			const { jwt } = data as UserResponse;
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully logged in',
				})
			);
			storage.setToken(jwt);
			navigate('/home');
		}
	}, [data, dispatch, isSuccess, navigate]);

	useEffect(() => {
		if (isError) {
			dispatch(
				addNotification({
					type: 'error',
					title: 'Error',
					message: (error as any).data.message,
				})
			);
		}
	}, [isError, error, dispatch]);

	return (
		<div>
			<Form
				initialValues={initialValues}
				onSubmit={async (values: LoginRequest, actions: any) => {
					await loginUser(values);
					actions.setSubmitting(false);
				}}
				schema={schema}
			>
				<InputField type="email" label="Email" name="email" />
				<InputField type="password" label="Password" name="password" />
			</Form>
		</div>
	);
};
