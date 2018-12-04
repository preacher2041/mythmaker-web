import React from 'react';
import { connect } from 'react-redux';

import { registerNewUser } from '../store/actions';

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
	}
});

class RegistrationComponent extends React.Component {
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
		const { classes, register } = this.props;

		return (
			<Paper className={classes.paper}>
				<form className={classes.form}>
					<TextField
						required
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
						required
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
						onClick={() => register(this.state.email, this.state.password)}>
						Submit
					</Button>
				</form>
			</Paper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	register: (email, password, history) => dispatch(registerNewUser(email, password, history))
});

export default withRouter(connect(null, mapDispatchToProps)(withStyles(styles)(RegistrationComponent)));
