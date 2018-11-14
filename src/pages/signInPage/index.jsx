import React from 'react';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SignInComponent from '../../features/auth/signInComponent/index';
import RegistrationComponent from '../../features/auth/registerComponent/index';
import TabComponent from '../../features/tabComponent';

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
});

const SignIn = ({ classes }) => {
	const props = {
		tabs: [
			<Tab label="Sign-In"/>,
			<Tab label="Register"/>
		],
		content: [
			<SignInComponent />,
			<RegistrationComponent />
		],
	};

	return (
		<main className={classes.layout}>
			<TabComponent {...props}/>
		</main>
	);
};

export default withStyles(styles)(SignIn);
