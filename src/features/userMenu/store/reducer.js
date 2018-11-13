import { actionTypes } from './actions';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.SIGN_OUT_SUBMITTED:
			return {
				...state,
				isSubmitting: true,
			};
		case actionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				isSubmitting: true,
				userSignedIn: null,
				signOutError: null,
			};
		case actionTypes.SIGN_OUT_FAILED:
			const error = action.error.message;
			return {
				...state,
				isSubmitting: false,
				signOutError: error
			};
		default:
			return state;
	}
};

export default reducer;
