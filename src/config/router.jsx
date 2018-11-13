import React from 'react';

import { Switch, Route} from 'react-router-dom';

import LandingPage from '../pages/landingPage/index';
import SignIn from '../pages/signInPage/index';
import Home from '../pages/landingPage/home';

export default function Router() {
	return <Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/auth/home" component={Home} />
	</Switch>
}