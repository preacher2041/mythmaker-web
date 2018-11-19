import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

import Router from './routes/router'
import NavContainer from './features/navBar';

class App extends Component {
	render() {
		return <React.Fragment>
			<CssBaseline />
			<NavContainer />
			<Router />
		</React.Fragment>
	}
}

export default App;