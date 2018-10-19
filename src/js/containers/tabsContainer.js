import React from 'react';

import TabsComponent from '../components/tabsComponent';

class TabsContainer extends React.Component {
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

		return <TabsComponent value={value} handleChange={this.handleChange} />;
	}
}

export default TabsContainer;
