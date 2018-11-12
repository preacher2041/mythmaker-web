import { all, fork } from 'redux-saga/effects';
import signIn from '../features/signInComponent/sagas';

export default function* rootSaga () {
	yield all([
		fork(signIn),
	]);
}