export const actionTypes = {
	SIGN_IN_SUBMITTED: 'SIGN_IN_SUBMITTED',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED: 'SIGN_IN_FAILED',
	SIGN_OUT_SUBMITTED: 'SIGN_OUT_SUBMITTED',
	SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILED: 'SIGN_OUT_FAILED'
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

export const signOutSubmitted = () => ({
	type: actionTypes.SIGN_OUT_SUBMITTED
});

export const signOutSuccess = (result) => ({
	type: actionTypes.SIGN_OUT_SUCCESS,
	result: result
});

export const signOutError = (error) => ({
	type: actionTypes.SIGN_OUT_FAILED,
	error: error
});