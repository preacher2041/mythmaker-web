import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyA0HJsaLPH1pta61-m06hvpiwGyco4tx1w',
	authDomain: 'authentication-framework.firebaseapp.com',
	databaseURL: 'https://authentication-framework.firebaseio.com',
	projectId: 'authentication-framework',
	storageBucket: '',
	messagingSenderId: '347537120149'
};

firebase.initializeApp(config);
export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
