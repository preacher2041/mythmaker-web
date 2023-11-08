import { useSelector } from 'react-redux';

import { selectUserInfo } from '@/features/auth';

export const UserProfile = () => {
	const userInfo = useSelector(selectUserInfo);

	return (
		<div>
			<figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
			<span>
				Welcome <strong>{userInfo?.firstName}!</strong> You can view this page because
				you&aposre logged in
			</span>
		</div>
	);
};
