export type UserObject = {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	dob: string;
	password: string;
	accessToken: string;
};

export type ProfileResponse = {
	status: boolean;
	message: string;
	data: UserObject;
};

export type LoginRequest = {
	email: string;
	password: string;
};

export type LoginResponse = {
	status: boolean;
	message: string;
	data: UserObject & {
		id: string;
		createdAt: string;
	};
};

export type RegistrationRequest = {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	dob: string;
	password: string;
};

export type RegistrationResponse = {
	status: boolean;
	message: string;
	data: UserObject;
};
