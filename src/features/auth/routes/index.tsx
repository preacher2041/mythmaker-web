import { Login } from './Login';
import { Registration } from './Registration';

export const AuthRoutes = {
	path: 'auth',
	children: [
		{
			path: 'login',
			element: <Login />,
		},
		{
			path: 'registration',
			element: <Registration />,
		},
	],
};
