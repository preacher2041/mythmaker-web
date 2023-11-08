import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout, selectUserInfo, setCredentials, useGetUserDetailsQuery } from '@/features/auth';

export const Header = () => {
	const userInfo = useSelector(selectUserInfo);
	const dispatch = useDispatch();

	const { data, isFetching } = useGetUserDetailsQuery();

	useEffect(() => {
		if (data) dispatch(setCredentials(data));
	}, [data, dispatch]);

	return (
		<header>
			<div className="relative flex items-center h-[70px] w-full p-6 bg-grey-100 text-near-black">
				<span>
					{isFetching
						? `Fetching your profile...`
						: userInfo !== null
						? `Logged in as ${userInfo.email}`
						: "You're not logged in"}
				</span>
				<div className="ml-auto">
					{userInfo ? (
						<button className="button" onClick={() => dispatch(logout())}>
							Logout
						</button>
					) : (
						<NavLink className="button" to="/auth/login">
							Login
						</NavLink>
					)}
				</div>
			</div>
			<nav className="text-center">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/auth/login">Login</NavLink>
				<NavLink to="/auth/registration">Register</NavLink>
				<NavLink to="/user-profile">Profile</NavLink>
			</nav>
		</header>
	);
};
