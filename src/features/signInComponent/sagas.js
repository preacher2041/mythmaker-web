import {call, put, takeEvery} from 'redux-saga/effects';
import {provider, auth} from '../../config/firebase';

function* fetchUser() {
	try {
		const result = yield call(auth.signInWithPopup(provider));
		yield put({
			type: 'SIGN_IN_SUCCESS',
			user: result.user,
			isUserLoggedIn: true});
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({type: 'SIGN_IN_FAILED', error: errorMessage});
	}
}

function* mySaga() {
	yield takeEvery('SIGN_IN_SUBMITTED', fetchUser);
}

export default mySaga;