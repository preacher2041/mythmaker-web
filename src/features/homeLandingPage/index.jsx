import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ProtectedRoute from '../../customRoutes/protectedRoute'
import LandingPage from '../../pages/landingPage/index';
import SignIn from '../../pages/signInPage/index';
import Home from '../../pages/userLandingPage/index';
import UserProfile from '../../pages/userProfile/index';

class HomeLandingPage extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/sign-in" component={SignIn} />
				<ProtectedRoute path="/auth/home" component={Home}/>
				<Route path="/auth/my-profile" component={UserProfile} />
			</Switch>
		);
	}
}

export default HomeLandingPage;