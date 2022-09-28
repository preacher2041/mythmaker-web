import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';

const Dashboard = lazy(() =>
	import('@/features/misc').then(({ Dashboard }) => ({ default: Dashboard }))
);

const UserProfile = lazy(() =>
	import('@/features/userProfile').then(({ UserProfile }) => ({
		default: UserProfile
	}))
);

const PrivateRoutes = () => {
	return (
		<MainLayout>
			<Suspense
				fallback={
					<div className="h-full w-full flex items-center justify-center">
						<Spinner size="xl" variant="light" />
					</div>
				}>
				<Outlet />
			</Suspense>
		</MainLayout>
	);
};

export const protectedRoutes = [
	{
		path: 'home/*',
		element: <PrivateRoutes />,
		children: [
			{ path: 'user-profile/', element: <UserProfile /> },
			{ index: true, element: <Dashboard /> },
			{ path: '*', element: <Navigate to="." /> }
		]
	}
];
