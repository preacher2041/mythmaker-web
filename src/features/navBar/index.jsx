import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserMenu from '../userMenu/index';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { auth } from '../../config/firebase'
import { signInUser } from '../auth/store/actions';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1,
		textDecoration: 'none'
	},
	title: {
		color: theme.palette.primary.contrastText
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	menuButtonHidden: {
		display: 'none'
	}
});

class ButtonAppBar extends React.Component {
	componentDidMount() {
		const {onSignedIn} = this.props;

		auth.onAuthStateChanged((user) => {
			if (user) {
				onSignedIn(user);
			}
		});
	}

	render() {
		const { classes, signedInUser } = this.props;

		return (
			<div className={classes.root}>
				<AppBar color="primary" position="static">
					<Toolbar>
						{signedInUser ? (
							<IconButton
								className={classes.menuButton}
								color="inherit"
								aria-label="Menu">
								<MenuIcon/>
							</IconButton>
						) : (
							<IconButton
								className={classes.menuButtonHidden}
								color="inherit"
								aria-label="Menu">
								<MenuIcon/>
							</IconButton>
						)}
						<Link to="/" className={classes.grow}>
							<Typography className={classes.title} variant="h6">
								Authentication Framework
							</Typography>
						</Link>
						{signedInUser ? (
							<UserMenu />
						) : (
							<Button
								variant="contained"
								color="secondary"
								component={Link}
								to="/sign-in">
								Sign in
							</Button>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

const mapDispatchToProps = dispatch => ({
	onSignedIn: (user) => dispatch(signInUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ButtonAppBar));