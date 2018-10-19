import React from 'react';

import TabComponent from './tabComponent';
import SignInComponent from '../components/signInComponent';
import RegistrationComponent from '../components/registrationComponent';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

const TabsComponent = props => (
	<React.Fragment>
		<Tabs fullWidth value={props.value} onChange={props.handleChange}>
			<Tab label="Sign in" />
			<Tab label="Register" />
		</Tabs>

		{props.value === 0 && (
			<TabComponent>
				<SignInComponent />
			</TabComponent>
		)}
		{props.value === 1 && (
			<TabComponent>
				<RegistrationComponent />
			</TabComponent>
		)}
	</React.Fragment>
);

export default TabsComponent;
