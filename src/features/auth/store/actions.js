export const actionTypes = {
	SIGN_IN_WITH_GOOGLE_SUBMITTED : 'SIGN_IN_WITH_GOOGLE_SUBMITTED',
	SIGN_IN_WITH_CREDENTIALS_SUBMITTED : 'SIGN_IN_WITH_CREDENTIALS_SUBMITTED',
	SIGN_IN_SUCCESS : 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED : 'SIGN_IN_FAILED',
	SIGN_OUT_SUBMITTED : 'SIGN_OUT_SUBMITTED',
	SIGN_OUT_SUCCESS : 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILED : 'SIGN_OUT_FAILED',
	REGISTER_NEW_USER : 'REGISTER_NEW_USER',
	REGISTRATION_FAILED : 'REGISTRATION_FAILED'
};

export const signInWithGoogleSubmitted = () => ({
	type: actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED,
});

export const signInWithCredentialsSubmitted = (email, password) => ({
	type: actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED,
	email: email,
	password: password
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

export const registerNewUser = (email, password) => ({
	type: actionTypes.REGISTER_NEW_USER,
	email: email,
	password: password
});

export const regsitrationError = (error) => ({
	type: actionTypes.REGISTRATION_FAILED,
	error: error
});