import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import storage from '@/utils/storage';

import { useRegisterUserMutation } from '../api/authApi';
import { RegistrationRequest, UserResponse } from '../types';

const initialValues = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	confirmPassword: '',
};

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	firstName: Yup.string().label('First Name').required().min(3).max(20),
	lastName: Yup.string().label('Last Name').required().min(3).max(30),
	password: Yup.string()
		.label('Password')
		.required()
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'Password must contain at least 8 characters, one uppercase, one number and one special case character'
		),
	confirmPassword: Yup.string()
		.label('Password')
		.required('Please confirm your password')
		.when('password', {
			is: (password: string) => (password && password.length > 0 ? true : false),
			then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
		}),
});

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [registerUser, { data, isSuccess, isError, error }] = useRegisterUserMutation();

	useEffect(() => {
		if (isSuccess) {
			const { jwt } = data as UserResponse;
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully registered an account',
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
	}, [dispatch, error, isError]);

	return (
		<div>
			<Form
				initialValues={initialValues}
				onSubmit={async (values: RegistrationRequest, actions: any) => {
					await registerUser(values);
					actions.setSubmitting(false);
				}}
				schema={schema}
			>
				<InputField type="email" label="Email" name="email" />
				<InputField type="text" label="First Name" name="firstName" />
				<InputField type="text" label="Last Name" name="lastName" />
				<InputField type="password" label="Password" name="password" />
				<InputField type="password" label="Confirm Password" name="confirmPassword" />
			</Form>
		</div>
	);
};
