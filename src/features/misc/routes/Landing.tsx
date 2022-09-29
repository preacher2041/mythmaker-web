import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Elements';
import { useAuth } from '@/hooks/useAuth';

export const Landing = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	const handleLoginStart = () => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/auth/login');
		}
	};

	const handleRegisterStart = () => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/auth/register');
		}
	};

	return (
		<div className="relative">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="relative sm:rounded-2xl sm:overflow-hidden">
					<div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16 lg:px-8">
						<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
							<span className="block text-blue-500">
								React App
							</span>
						</h1>
					</div>
					<div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
						<div className="md:flex items-center justify-center md:flex-1 lg:w-0">
							<Button className="mr-2" onClick={handleLoginStart}>
								Sign in
							</Button>
							<Button
								variant="secondary"
								onClick={handleRegisterStart}>
								Sign up
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
