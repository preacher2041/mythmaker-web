import React from 'react';

import { Switch, Route} from 'react-router-dom';

import ProtectedRoute from './protectedRoute'
import LandingPage from '../pages/landingPage/index';
import SignIn from '../pages/signInPage/index';
import Home from '../pages/userLandingPage/index';

export default function Router() {
	return <Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/sign-in" component={SignIn} />
		<ProtectedRoute path="/auth/home" component={Home} />
	</Switch>
}