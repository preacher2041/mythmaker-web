import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

import HomeLandingPage from './features/homeLandingPage'
import NavContainer from './features/navBar';

class App extends Component {
	render() {
		return <React.Fragment>
			<CssBaseline />
			<NavContainer />
			<HomeLandingPage />
		</React.Fragment>
	}
}


export default App;