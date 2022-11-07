import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';

import { useUpdateUserPasswordMutation } from '../api/userProfileApi';
import { UpdatePasswordRequest } from '../types';

const initialValues = {
	oldPassword: '',
	password: '',
	confirmPassword: ''
};

const schema = Yup.object().shape({
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
			is: (password: string) =>
				password && password.length > 0 ? true : false,
			then: Yup.string().oneOf(
				[Yup.ref('password')],
				"Password doesn't match"
			)
		})
});

export const ChangePasswordForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [updatePassword, { isSuccess, isError, error }] =
		useUpdateUserPasswordMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully changed your password'
				})
			);
		}
	}, [dispatch, isSuccess, navigate]);

	useEffect(() => {
		if (isError) {
			dispatch(
				addNotification({
					type: 'error',
					title: 'Error',
					message: (error as any).data.message
				})
			);
		}
	}, [dispatch, error, isError]);

	return (
		<div>
			<Form
				initialValues={initialValues}
				onSubmit={async (
					values: UpdatePasswordRequest,
					actions: any
				) => {
					await updatePassword(values);
					actions.setSubmitting(false);
				}}
				schema={schema}>
				<InputField
					type='password'
					label='Old Password'
					name='oldPassword'
				/>
				<InputField type='password' label='Password' name='password' />
				<InputField
					type='password'
					label='Confirm Password'
					name='confirmPassword'
				/>
			</Form>
		</div>
	);
};
