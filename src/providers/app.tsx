import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { Spinner } from '@/components/Elements/Spinner';
import { AppRoutes } from '@/routes';
import { store } from '@/stores/store';

const ErrorFallback = () => {
	return (
		<div
			className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
			role="alert"
		>
			<h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
		</div>
	);
};

export const AppProvider = () => {
	return (
		<React.Suspense
			fallback={
				<div className="flex items-center justify-center w-screen h-screen">
					<Spinner size="xl" />
				</div>
			}
		>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<Provider store={store}>
						<RouterProvider router={AppRoutes()} />
					</Provider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
