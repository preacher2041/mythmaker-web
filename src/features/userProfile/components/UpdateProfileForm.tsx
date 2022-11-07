import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import { useAuth } from '@/hooks/useAuth';

import { useUpdateUserProfileMutation } from '../api/userProfileApi';
import { UpdateProfileRequest } from '../types';

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	firstName: Yup.string().label('First Name').required().min(3).max(20),
	lastName: Yup.string().label('Last Name').required().min(3).max(30)
});

export const UpdateProfileForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useAuth();
	const [updateUser, { data, isSuccess, isError, error }] =
		useUpdateUserProfileMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message:
						'You have successfully updated your account details'
				})
			);
		}
	}, [data, dispatch, isSuccess, navigate]);

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
				initialValues={user}
				onSubmit={async (
					values: UpdateProfileRequest,
					actions: any
				) => {
					await updateUser(values);
					actions.setSubmitting(false);
				}}
				schema={schema}>
				<InputField type='text' label='First Name' name='firstName' />
				<InputField type='text' label='Last Name' name='lastName' />
				<InputField type='email' label='Email' name='email' />
			</Form>
		</div>
	);
};
