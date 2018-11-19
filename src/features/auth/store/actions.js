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

export const signInWithGoogleSubmitted = (history) => ({
	type: actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED,
	history: history
});

export const signInWithCredentialsSubmitted = (email, password, history) => ({
	type: actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED,
	email,
	password,
	history
});

export const signInSuccess = (result) => ({
	type: actionTypes.SIGN_IN_SUCCESS,
	result
});

export const signInFailed = (error) => ({
	type: actionTypes.SIGN_IN_FAILED,
	error
});

export const signOutSubmitted = (history) => ({
	type: actionTypes.SIGN_OUT_SUBMITTED,
	history
});

export const signOutSuccess = (result) => ({
	type: actionTypes.SIGN_OUT_SUCCESS,
	result
});

export const signOutError = (error) => ({
	type: actionTypes.SIGN_OUT_FAILED,
	error
});

export const registerNewUser = (email, password) => ({
	type: actionTypes.REGISTER_NEW_USER,
	email,
	password
});

export const regsitrationError = (error) => ({
	type: actionTypes.REGISTRATION_FAILED,
	error
});