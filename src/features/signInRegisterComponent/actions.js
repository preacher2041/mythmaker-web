const actionTypes = {
	userSignedIn: 'USER_SIGNED_IN',
	userSignedOut: 'USER_SIGNED_OUT',
};

export const signIn = () => ({
	type: actionTypes.userSignedIn,
	userSignedIn: true
});

export const signOut = () => ({
	type: actionTypes.userSignedOut,
	userSignedIn: false
});
