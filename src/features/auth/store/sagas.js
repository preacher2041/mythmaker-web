import { call, put, takeEvery } from 'redux-saga/effects';
import { provider, auth, sessionPersistence } from '../../../config/firebase';
import { actionTypes } from './actions';

function* fetchUserWithGoogle(action) {
	try {
		yield call([auth, auth.setPersistence], sessionPersistence);
		const result = yield call([auth, auth.signInWithPopup], provider);
		yield put({
			type: actionTypes.SIGN_IN_SUCCESS,
			result: result,
		});
		action.history.push('/auth/home');
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_IN_FAILED,
			error: errorMessage
		});
	}
}

function* fetchUserWithCredentials(action) {
	try {
		yield call([auth, auth.setPersistence], sessionPersistence);
		const result = yield call([auth, auth.signInWithEmailAndPassword], action.email, action.password);
		yield put({
			type: actionTypes.SIGN_IN_SUCCESS,
			result: result,
		});
		action.history.push('/auth/home');
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_IN_FAILED,
			error: errorMessage
		});
	}
}

function* signOut(action) {
	try {
		yield call([auth, auth.signOut]);
		yield put({
			type: actionTypes.SIGN_OUT_SUCCESS
		});
		action.history.push('/');
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.SIGN_OUT_FAILED,
			error: errorMessage
		});
	}
}

function * register(action) {
	try {
		yield call([auth, auth.createUserWithEmailAndPassword], action.email, action.password);
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.REGISTRATION_FAILED,
			error: errorMessage
		});
	}
}

function* authSaga() {
	yield takeEvery(actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED, fetchUserWithGoogle);
	yield takeEvery(actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED, fetchUserWithCredentials);
	yield takeEvery(actionTypes.SIGN_OUT_SUBMITTED, signOut);
	yield takeEvery(actionTypes.REGISTER_NEW_USER, register)
}

export default authSaga;