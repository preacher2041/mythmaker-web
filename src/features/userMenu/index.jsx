import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { NavLink, withRouter } from 'react-router-dom';

import SignOutButton from '../auth/signOutComponent/index';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = () => ({
	navLink: {
		textDecoration: 'none'
	}
});

class UserMenu extends React.Component {
	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		const { classes } = this.props;

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
					<NavLink to='/auth/my-profile' className={classes.navLink}>
						<MenuItem >Profile</MenuItem>
					</NavLink>
					<SignOutButton/>
				</Menu>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(UserMenu));