import { actionTypes } from './actions';

const authReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED:
			return {
				...state,
				isSubmitting: true,
			};
		case actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED:
			return {
				...state,
				isSubmitting: true,
			};
		case actionTypes.SIGN_IN_SUCCESS:
			const user = action.result.user;
			return {
				...state,
				isSubmitting: false,
				signedInUser: user,
				signInError: null
			};
		case actionTypes.SIGN_IN_FAILED:
			const signInError = action.error.message;
			return {
				...state,
				isSubmitting: false,
				signInError: signInError
			};
		case actionTypes.SIGN_OUT_SUBMITTED:
			return {
				...state
			};
		case actionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				signedInUser: null,
				signOutError: null,
			};
		case actionTypes.SIGN_OUT_FAILED:
			const signOutError = action.error.message;
			return {
				...state,
				signOutError: signOutError
			};
		default:
			return state;
	}
};

export default authReducer;
