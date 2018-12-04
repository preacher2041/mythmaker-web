import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signInWithGoogleSubmitted } from '../store/actions';
import { signInWithCredentialsSubmitted } from '../store/actions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
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
	},
	progress: {
		margin: theme.spacing.unit * 2
	}
});

class SignInComponent extends React.Component {
	updateEmail = event => {
		const email = event.target.value;

		this.setState({
			email
		});
	};

	updatePassword = event => {
		const password = event.target.value;

		this.setState({
			password
		});
	};

	render() {
		const { classes, history, isSubmitting, signInWithGoogle, signInWithCredentials } = this.props;

		return (
			<Paper className={classes.paper}>
				{isSubmitting ? (
					<CircularProgress/>
				) : (
					<form className={classes.form}>
						<TextField
							className={classes.textField}
							fullWidth
							variant='outlined'
							color='inherit'
							label='Email'
							type='email'
							name='email'
							onChange={this.updateEmail}
						/>
						<TextField
							className={classes.textField}
							fullWidth
							variant='outlined'
							color='inherit'
							label='Password'
							type='password'
							name='password'
							onChange={this.updatePassword}
						/>
						<Button
							fullWidth
							className={classes.button}
							variant='contained'
							color='secondary'
							onClick={() => signInWithCredentials(this.state.email,this.state.password, history)}>
						Sign in
						</Button>
						<Button
							fullWidth
							className={classes.button}
							variant='contained'
							color='primary'
							onClick={() => signInWithGoogle(history)}>
							Sign in with google
						</Button>
					</form>
				)}
			</Paper>
		);
	}
}

const mapStateToProps = state => ({
	isSubmitting: state.auth.isSubmitting
});

const mapDispatchToProps = dispatch => ({
	signInWithGoogle: (history) => dispatch(signInWithGoogleSubmitted(history)),
	signInWithCredentials: (email, password, history) => dispatch(signInWithCredentialsSubmitted(email, password, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInComponent)));
