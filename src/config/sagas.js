import { all, fork } from 'redux-saga/effects';
import signIn from '../features/signInComponent/store/sagas';
import signOut from '../features/userMenu/store/sagas';

export default function* rootSaga () {
	yield all([
		fork(
			signIn,
			signOut
		),
	]);
}