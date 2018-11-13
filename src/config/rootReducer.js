import { combineReducers } from 'redux';

import authReducer from '../features/signInComponent/store/reducer';

export default combineReducers({
	auth: authReducer
});
