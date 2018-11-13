export const actionTypes = {
	SIGN_OUT_SUBMITTED: 'SIGN_OUT_SUBMITTED',
	SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILED: 'SIGN_OUT_FAILED'
};

export const signOutSubmitted = () => ({
	type: actionTypes.SIGN_OUT_SUBMITTED,
	userSignedIn: false
});

export const signOutSuccess = (result) => ({
	type: actionTypes.SIGN_OUT_SUCCESS,
	result: result
});

export const signOutError = (error) => ({
	type: actionTypes.SIGN_OUT_FAILED,
	error: error
});
