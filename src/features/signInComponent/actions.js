export const actionTypes = {
	SIGN_IN_SUBMITTED: 'SIGN_IN_SUBMITTED',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED: 'SIGN_IN_FAILED'
};

export const signInSubmitted = () => ({
	type: actionTypes.SIGN_IN_SUBMITTED,
});

export const signInSuccess = () => ({
	type: actionTypes.SIGN_IN_SUCCESS
});

export const signInFailed = () => ({
	type: actionTypes.SIGN_IN_FAILED
});