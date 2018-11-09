import React from 'react';

import TabContents from './tabContents';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const TabsComponent = props => (
	<React.Fragment>
		<Tabs fullWidth value={props.value} onChange={props.handleChange}>
			{
				[...Array(props.tabsNumber)].map(
					(e, i) => <Tab label={props.tabsLabels[i]} key={i}/>
				)
			}
		</Tabs>

		{props.value === 0 && (
			<TabContents>
				{props.tabsContents[0]}
			</TabContents>
		)}
		{props.value === 1 && (
			<TabContents>
				{props.tabsContents[1]}
			</TabContents>
		)}
	</React.Fragment>
);

export default TabsComponent;
