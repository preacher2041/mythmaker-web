import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { signIn } from './actions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
		3}px ${theme.spacing.unit * 3}px`
	},
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing.unit
	},
	textField: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	button: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	}
});

class SignInComponent extends React.Component {
	handleClick() {
		const { dispatch, history } = this.props;
		dispatch(signIn());
		history.push('/reducer/home')
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<form className={classes.form}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='outlined'
						color='inherit'
						label='Email'
						type='email'
						name='email'
					/>
					<TextField
						className={classes.textField}
						fullWidth
						variant='outlined'
						color='inherit'
						label='Password'
						type='password'
						name='password'
					/>
					<Button
						fullWidth
						className={classes.button}
						variant='contained'
						color='secondary'>
						Sign in
					</Button>
					<Button
						fullWidth
						className={classes.button}
						variant='contained'
						color='primary'
						onClick={() => this.handleClick()}>
						Sign in with google
					</Button>
				</form>
			</Paper>
		);
	}
}

export default connect()(withRouter(withStyles(styles)(SignInComponent)));
