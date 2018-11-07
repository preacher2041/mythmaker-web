const reducer = (state = [], action) => {
	switch (action.type) {
		case 'USER_SIGNED_IN':
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
