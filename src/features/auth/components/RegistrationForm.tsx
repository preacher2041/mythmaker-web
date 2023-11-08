import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Error } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { registerUser, selectAuthError, selectAuthSuccess, selectUserInfo } from '@/features/auth';
import { AppDispatch } from '@/stores/store';

import { RegistrationRequest } from '../types';

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

export const RegistrationForm = () => {
	const success = useSelector(selectAuthSuccess);
	const error = useSelector(selectAuthError);
	const userInfo = useSelector(selectUserInfo);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	useEffect(() => {
		// redirect authenticated user to profile screen
		if (userInfo) navigate('/user-profile');
		// redirect user to login page if registration was successful
		if (success) navigate('/login');
	}, [navigate, userInfo, success]);

	return (
		<div>
			{error && <Error>{error}</Error>}
			<Form
				initialValues={initialValues}
				onSubmit={async (values: RegistrationRequest, actions: any) => {
					dispatch(registerUser(values));
					actions.setSubmitting(false);
				}}
				schema={schema}
			>
				<InputField type="text" label="Username" name="username" />
				<InputField type="email" label="Email" name="email" />
				<InputField type="text" label="First Name" name="firstName" />
				<InputField type="text" label="Last Name" name="lastName" />
				<InputField type="date" label="DOB" name="dob" />
				<InputField type="password" label="Password" name="password" />
				<InputField type="password" label="Confirm Password" name="confirmPassword" />
			</Form>
		</div>
	);
};
