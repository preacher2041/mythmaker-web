export const actionTypes = {
	SIGN_IN_SUBMITTED: 'SIGN_IN_SUBMITTED',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED: 'SIGN_IN_FAILED'
};

export const signInSubmitted = () => ({
	type: actionTypes.SIGN_IN_SUBMITTED,
});

export const signInSuccess = (result) => ({
	type: actionTypes.SIGN_IN_SUCCESS,
	result: result
});

export const signInFailed = (error) => ({
	type: actionTypes.SIGN_IN_FAILED,
	error: error
});