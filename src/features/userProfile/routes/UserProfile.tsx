import { ChangePasswordForm } from '../components/ChangePasswordForm';
import { UpdateProfileForm } from '../components/UpdateProfileForm';

export const UserProfile = () => {
	return (
		<div className="flex-1 xl:overflow-y-auto">
			<div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
				<h1 className="text-3xl font-extrabold text-blue-gray-900">
					Account
				</h1>

				<UpdateProfileForm />
				<ChangePasswordForm />
			</div>
		</div>
	);
};
