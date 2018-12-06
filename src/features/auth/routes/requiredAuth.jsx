import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Home from '../../../pages/userLandingPage';
import UserProfile from '../../../pages/userProfile';
import UpdateProfile from '../updateProfile';
import { auth } from '../../../config/firebase'
import { signInUser } from '../../auth/store/actions';

class RequiredAuth extends React.Component {
	onAuth() {
		const {onSignedIn, authReady} = this.props;
		auth.onAuthStateChanged((user) => {
			if (user && !authReady) {
				onSignedIn(user);
			}
		});
	}

	render() {
		this.onAuth();
		const { match: {path}, signedInUser, authReady} = this.props;
		const route = <Route>
			{signedInUser ? (
				<Switch>
					<Route path={`${path}/home`} component={Home} />
					<Route path={`${path}/update-profile`} component={UpdateProfile} />
					<Route path={`${path}/my-profile`} component={UserProfile} />
				</Switch>
			) : (
				<Redirect to={'/sign-in'}/>
			)}
		</Route>;

		return(
			<div>
				{authReady ? (route) : (<div></div>)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser,
	authReady: state.auth.authReady
});

const mapDispatchToProps = dispatch => ({
	onSignedIn: (user) => dispatch(signInUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiredAuth);