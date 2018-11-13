import { call, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../../config/firebase';
import { actionTypes } from './actions';

function* signOut() {
	try {
		const result = yield call([auth, auth.signOut], null);
		yield put({
			type: actionTypes.SIGN_OUT_SUCCESS,
			result: result,
		});
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_OUT_FAILED,
			error: errorMessage
		});
	}
}

function* authSignOutSaga() {
	yield takeEvery(actionTypes.SIGN_OUT_SUBMITTED, signOut);
}

export default authSignOutSaga;