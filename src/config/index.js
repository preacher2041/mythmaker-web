import { combineReducers } from 'redux';

import reducer from '../features/signInRegisterComponent/reducer';

export default combineReducers({
	auth: reducer
});
