const actionTypes = {
	userSignedIn: 'USER_SIGNED_IN',
};

export const signIn = () => ({
	type: actionTypes.userSignedIn,
	userSignedIn: true
});