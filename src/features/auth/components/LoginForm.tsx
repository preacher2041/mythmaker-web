import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Error } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { loginUser, selectAuthError, selectUserInfo } from '@/features/auth';
import { AppDispatch } from '@/stores/store';

import { LoginRequest } from '../types';

const initialValues = {
	email: '',
	password: '',
};

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	password: Yup.string().label('Password').required(),
});

export const LoginForm = () => {
	const error = useSelector(selectAuthError);
	const userInfo = useSelector(selectUserInfo);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo) {
			navigate('/user-profile');
		}
	}, [navigate, userInfo]);

	return (
		<div>
			{error && <Error>{error}</Error>}
			<Form
				initialValues={initialValues}
				onSubmit={async (values: LoginRequest, actions: any) => {
					dispatch(loginUser(values));
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
