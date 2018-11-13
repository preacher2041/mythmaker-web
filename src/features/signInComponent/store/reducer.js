import { actionTypes } from './actions';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.SIGN_IN_SUBMITTED:
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
			const error = action.error.message;
			return {
				...state,
				isSubmitting: false,
				signInError: error
			};
		default:
			return state;
	}
};

export default reducer;
