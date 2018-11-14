import { combineReducers } from 'redux';

import authReducer from '../features/auth/store/reducer';

export default combineReducers({
	auth: authReducer
});