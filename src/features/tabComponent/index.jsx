import React from 'react';

import SignInComponent from '../signInComponent/signInComponent';
import RegistrationComponent from '../registerComponent/registrationComponent';

import TabsComponent from './tabComponent';

class Index extends React.Component {
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
		const tabLabels = [
			'Sign-In',
			'Register'
		];

		const tabContents = [
			<SignInComponent />,
			<RegistrationComponent />
		];

		return <TabsComponent value={value}
							  handleChange={this.handleChange}
							  tabsNumber={2}
							  tabsLabels={tabLabels}
							  tabsContents={tabContents}
		/>;
	}
}

export default Index;
