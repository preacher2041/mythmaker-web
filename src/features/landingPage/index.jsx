import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h2: {
		margin: theme.spacing.unit
	}
});

const index = ({ classes }) => (
	<Typography className={classes.h2} variant='h2'>
		Welcome to the React App please sign in or register to access features
	</Typography>
);

export default withStyles(styles)(index);
