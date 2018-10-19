import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h2: {
		margin: theme.spacing.unit
	}
});

const primaryLayout = ({ classes, props }) => (
	<Typography className={classes.h2} variant="h2">
		Main Content
	</Typography>
);

export default withStyles(styles)(primaryLayout);
