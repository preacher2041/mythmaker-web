import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signOutSubmitted } from '../store/actions';

import MenuItem from '@material-ui/core/MenuItem';

class SignOutButton extends React.Component {
	render() {
		const { history, signOut } = this.props;
		return (
			<MenuItem
				onClick={() => signOut(history)}>
				Sign out
			</MenuItem>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signOut: (history) => dispatch(signOutSubmitted(history))
});

export default withRouter(connect(null, mapDispatchToProps)(SignOutButton));