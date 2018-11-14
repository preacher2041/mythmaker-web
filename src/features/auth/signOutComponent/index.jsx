import React from 'react';
import { connect } from 'react-redux';

import { signOutSubmitted } from '../store/actions';

import MenuItem from '@material-ui/core/MenuItem';

class SignOutButton extends React.Component {
	handleClick() {
		this.props.signOut();
	}

	render() {
		return (
			<MenuItem
				onClick={() => this.handleClick()}>
				Sign out
			</MenuItem>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signOut: () => dispatch(signOutSubmitted())
	};
}

export default connect(null, mapDispatchToProps)(SignOutButton);