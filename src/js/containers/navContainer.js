import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/navBar';

const mapStateToProps = state => ({
		isUserLoggedIn: state.auth.userSignedIn
	});

const NavContainer = ({isUserLoggedIn}) => (
	<NavBar isUserLoggedIn={isUserLoggedIn}/>
);

export default connect(mapStateToProps)(NavContainer);