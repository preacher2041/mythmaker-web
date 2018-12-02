import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {
	render() {
		const {component: Component, signedInUser} = this.props;
		
		return(
			<Route>
				{signedInUser ? (
					<Component />
				) : (
					<Redirect to={'/'}/>
				)}
			</Route>
		)
	}
}

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

export default connect(mapStateToProps)(ProtectedRoute);