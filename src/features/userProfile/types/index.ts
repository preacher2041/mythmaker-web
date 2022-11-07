export type UpdateProfileRequest = {
	id: string;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
};

export type UpdateProfileResponse = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};

export type UpdatePasswordRequest = {
	oldPassword: string;
	newPassword: string;
};
