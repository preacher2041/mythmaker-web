import { useFetchUserQuery } from '@/features/auth';

import { Spinner } from '../Elements';

export const MainLayout = () => {
	const { data, isLoading } = useFetchUserQuery();

	if (isLoading) return <Spinner variant='light' />;
	return (
		<div>
			Welcome to the dashboard {data?.firstName} {data?.lastName}
		</div>
	);
};
