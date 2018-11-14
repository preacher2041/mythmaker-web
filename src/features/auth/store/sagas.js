import { call, put, takeEvery } from 'redux-saga/effects';
import { provider, auth, sessionPersistence } from '../../../config/firebase';
import { actionTypes } from './actions';

function* fetchUser() {
	try {
		yield call([auth, auth.setPersistence], sessionPersistence);
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

function* signOut() {
	try {
		yield call([auth, auth.signOut]);
		yield put({
			type: actionTypes.SIGN_OUT_SUCCESS
		});
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_OUT_FAILED,
			error: errorMessage
		});
	}
}

function* authSaga() {
	yield takeEvery(actionTypes.SIGN_IN_SUBMITTED, fetchUser);
	yield takeEvery(actionTypes.SIGN_OUT_SUBMITTED, signOut)
}

export default authSaga;