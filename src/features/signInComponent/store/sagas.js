import { call, put, takeEvery } from 'redux-saga/effects';
import { provider, auth } from '../../../config/firebase';
import { actionTypes } from './actions';

function* fetchUser() {
	try {
		const result = yield call([auth, auth.signInWithPopup], provider);
		yield put({
			type: actionTypes.SIGN_IN_SUCCESS,
			result: result,
		});
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_IN_FAILED,
			error: errorMessage
		});
	}
}

function* authSignInSaga() {
	yield takeEvery(actionTypes.SIGN_IN_SUBMITTED, fetchUser);
}

export default authSignInSaga;