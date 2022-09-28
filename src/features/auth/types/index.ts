export type UserValues = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};

export type UserResponse = {
	user: UserValues;
	jwt: string;
};

export type LoginRequest = {
	email: string;
	password: string;
};
export type RegistrationRequest = {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	confirmPassword: string;
};
