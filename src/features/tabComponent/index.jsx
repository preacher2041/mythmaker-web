import React, { Fragment } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SignInComponent from '../signInComponent/signInComponent';
import RegistrationComponent from '../registerComponent/registrationComponent';

class TabComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { value } = this.state;

		return (
			<Fragment>
				<Tabs
					fullWidth value={value}
					onChange={this.handleChange}
				>
					<Tab label="Sign-In"/>
					<Tab label="Register"/>
				</Tabs>
				{value === 0 && <SignInComponent />}
				{value === 1 && <RegistrationComponent />}
			</Fragment>
		);
	}
}

export default TabComponent;
