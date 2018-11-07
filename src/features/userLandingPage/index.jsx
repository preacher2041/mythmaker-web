import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h2: {
		margin: theme.spacing.unit
	}
});

const Index = ({ isUserLoggedIn, classes }) => (
	<div>
		{isUserLoggedIn ?
			<Typography variant={'display2'} className={classes.h2}>
				Hello, user!
			</Typography>
			:
			<Typography variant={'display2'} className={classes.h2}>
				You must be logged in to view this content
			</Typography>
		}
	</div>
);

export default withStyles(styles)(Index);