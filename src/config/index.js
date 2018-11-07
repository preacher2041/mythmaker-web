import { combineReducers } from 'redux';

import reducer from '../features/signIn/reducer';

export default combineReducers({
	auth: reducer
});
