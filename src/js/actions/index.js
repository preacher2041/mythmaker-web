export const signIn = () => ({
	type: 'USER_SIGNED_IN',
	userSignedIn: true
});

export const signOut = () => ({
	type: 'USER_SIGNED_OUT',
	userSignedOut: false
});
