import { combineReducers } from 'redux';

import reducer from '../features/signInComponent/reducer';

export default combineReducers({
	auth: reducer
});
