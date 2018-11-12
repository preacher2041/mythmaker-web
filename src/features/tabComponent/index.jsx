import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';

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
		const { tabs, content } = this.props;

		return (
			<Fragment>
				<Tabs
					fullWidth value={value}
					onChange={this.handleChange}
				>
					{tabs.map(tab => tab)}
				</Tabs>
				{content.map((content, key) => {
					const Content = () => content;

					return value === key ? <Content key={key} /> : null;
				})}
			</Fragment>
		);
	}
}

export default TabComponent;
