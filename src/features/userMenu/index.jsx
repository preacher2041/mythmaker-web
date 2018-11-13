import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signOutSubmitted } from './store/actions';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

class UserMenu extends React.Component {
	state = {
		anchorEl: null,
	};

	handleSignOut = () => {
		this.props.signOut();
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<div>
				<IconButton
					color='inherit'
					onClick={this.handleClick}
				>
					<AccountCircle />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
				</Menu>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signOut: () => dispatch(signOutSubmitted())
	}
}

export default connect(null, mapDispatchToProps)(withRouter(UserMenu));