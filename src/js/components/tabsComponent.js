import React from 'react';

import TabContents from './tabContents';
import SignInComponent from '../components/signInComponent';
import RegistrationComponent from '../components/registrationComponent';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const TabsComponent = props => (
	<React.Fragment>
		<Tabs fullWidth value={props.value} onChange={props.handleChange}>
			<Tab label="Sign in" />
			<Tab label="Register" />
		</Tabs>

		{props.value === 0 && (
			<TabContents>
				<SignInComponent />
			</TabContents>
		)}
		{props.value === 1 && (
			<TabContents>
				<RegistrationComponent />
			</TabContents>
		)}
	</React.Fragment>
);

export default TabsComponent;
