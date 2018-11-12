const reducer = (state = [], action) => {
	switch (action.type) {
		case 'SIGN_IN_SUBMITTED':
			return {
				...state,
				userSignedIn: action.userSignedIn
			};
		case 'USER_SIGNED_OUT':
			return {
				...state,
				userSignedIn: action.userSignedIn
			};
		default:
			return state;
	}
};

export default reducer;
