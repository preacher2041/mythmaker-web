import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/home';

const mapStateToProps = state => ({
	isUserLoggedIn: state.auth.userSignedIn
});

const HomeContainer = ({isUserLoggedIn}) => (
	<Home isUserLoggedIn={isUserLoggedIn}/>
);

export default connect(mapStateToProps)(HomeContainer);