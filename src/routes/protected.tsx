import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { selectUserInfo } from '@/features/auth';

export const ProtectedRoute = () => {
	const userInfo = useSelector(selectUserInfo);
	const navigate = useNavigate();

	if (!userInfo) {
		navigate('/');
	}

	return <Outlet />;
};
