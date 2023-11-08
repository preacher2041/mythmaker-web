import { Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout/MainLayout';
import { AuthRoutes } from '@/features/auth';
import { HomeRoute } from '@/features/home';
import { ProfileRoute } from '@/features/profile';

export const AppRoutes = () => {
	const AppContainer = () => {
		return (
			<MainLayout>
				<Suspense
					fallback={
						<div className="h-full w-full flex items-center justify-center">
							<Spinner size="xl" variant="light" />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</MainLayout>
		);
	};

	return createBrowserRouter([
		{
			path: '/',
			element: <AppContainer />,
			children: [
				AuthRoutes,
				ProfileRoute,
				HomeRoute,
				{ path: '*', element: <Navigate to="." /> },
			],
		},
	]);
};
