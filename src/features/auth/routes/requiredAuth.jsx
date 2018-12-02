import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Home from '../../../pages/userLandingPage/index';
import UserProfile from '../../../pages/userProfile';

class RequiredAuth extends React.Component {
	render() {
		const { match: {path}, signedInUser} = this.props;

		return(
			<Route>
				{signedInUser ? (
					<Switch>
						<Route path={`${path}/home`} component={Home} />
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

export default connect(mapStateToProps)(RequiredAuth);