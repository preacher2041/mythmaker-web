import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	title: {
		color: theme.palette.primary.contrastText
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
});

const ButtonAppBar = ({ classes, isUserLoggedIn }) => (
	<div className={classes.root}>
		<AppBar color="primary" position="static">
			<Toolbar>
				<IconButton
					className={classes.menuButton}
					color="inherit"
					aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Link to="/" className={classes.grow}>
					<Typography className={classes.title} variant="h6">
						Authentication Framework
					</Typography>
				</Link>
				{isUserLoggedIn ?
					<Button
						variant="contained"
						color="secondary"
						component={Link}
						to="/sign-in">
						Sign out
					</Button>
					:
					<Button
						variant="contained"
						color="secondary"
						component={Link}
						to="/sign-in">
						Sign in
					</Button>
				}
			</Toolbar>
		</AppBar>
	</div>
);

export default withStyles(styles)(ButtonAppBar);
