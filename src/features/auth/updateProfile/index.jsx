import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateNameSubmitted } from '../store/actions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import Paper from '@material-ui/core/Paper/Paper';

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

class updateProfile extends React.Component {
	updateName = event => {
		const name = event.target.value;

		this.setState({
			name
		});
	};

	render() {
		const { classes, updateName, history } = this.props;

		return (
			<Paper className={classes.paper}>
				<form>
					<TextField
						className={classes.textField}
						fullWidth
						variant='outlined'
						color='inherit'
						label='Name'
						type='text'
						name='name'
						onChange={this.updateName}
					/>
					<Button
						fullWidth
						className={classes.button}
						variant='contained'
						color='secondary'
						onClick={() => updateName(this.state.name, history)}>
						Sign in
					</Button>
				</form>
			</Paper>
		);
	}
}

const mapStateToProps = state => ({
	isSubmitting: state.auth.isSubmitting
});

const mapDispatchToProps = dispatch => ({
	updateName: (name, history) => dispatch(updateNameSubmitted(name, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(updateProfile)));
