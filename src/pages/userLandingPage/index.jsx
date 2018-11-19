import React from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h2: {
		margin: theme.spacing.unit
	}
});

const UserLandingPage = ({ signedInUser, classes }) => (
	<div>
		{signedInUser ?
			<Typography variant={'h3'} className={classes.h2}>
				Hello, user!
			</Typography>
			:
			<Typography variant={'h3'} className={classes.h2}>
				You must be logged in to view this content
			</Typography>
		}
	</div>
);

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

export default connect(mapStateToProps)(withStyles(styles)(UserLandingPage));