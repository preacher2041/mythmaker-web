const actionTypes = {
	userSignedOut: 'USER_SIGNED_OUT',
};

export const signOut = () => ({
	type: actionTypes.userSignedOut,
	userSignedIn: false
});
