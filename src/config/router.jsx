import React from 'react';

import { Switch, Route} from 'react-router-dom';

import LandingPage from '../features/landingPage/index';
import SignIn from '../features/signInRegisterComponent/signInPage';
import Home from '../features/landingPage/home';

export default function Router() {
	return <Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/auth/home" component={Home} />
	</Switch>
}