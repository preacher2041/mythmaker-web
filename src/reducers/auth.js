const auth = (state = [], action) => {
	switch (action.type) {
		case 'USER_SIGNED_IN':
			return {
				...state,
				userSignedIn: action.userSignedIn
			};
		default:
			return state;
	}
};

export default auth;
