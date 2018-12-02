import React from 'react';
import { Switch, Route} from 'react-router-dom';

import RequiredAuth from '../auth/routes/requiredAuth'
import LandingPage from '../../pages/landingPage/index';
import SignIn from '../../pages/signInPage/index';

class HomeLandingPage extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/auth" component={RequiredAuth}/>

			</Switch>
		);
	}
}

export default HomeLandingPage;