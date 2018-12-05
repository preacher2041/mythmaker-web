import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Home from '../../../pages/userLandingPage';
import UserProfile from '../../../pages/userProfile';
import UpdateProfile from '../updateProfile';
import { auth } from '../../../config/firebase'
import { signInUser } from '../../auth/store/actions';

class RequiredAuth extends React.Component {
	componentDidMount() {
		const {onSignedIn} = this.props;

		auth.onAuthStateChanged((user) => {
			if (user) {
				onSignedIn(user);
			}
		});
	}

	render() {
		const { match: {path}, signedInUser} = this.props;

		return(
			<Route>
				{signedInUser ? (
					<Switch>
						<Route path={`${path}/home`} component={Home} />
						<Route path={`${path}/update-profile`} component={UpdateProfile} />
						<Route path={`${path}/my-profile`} component={UserProfile} />
					</Switch>
				) : (
					<Redirect to={'/sign-in'}/>
				)}
			</Route>
		)
	}
}

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

const mapDispatchToProps = dispatch => ({
	onSignedIn: (user) => dispatch(signInUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiredAuth);