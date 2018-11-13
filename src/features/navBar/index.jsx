import React from 'react';
import { connect } from 'react-redux';

import NavBar from './navBar';

const mapStateToProps = state => ({
		isUserLoggedIn: state.auth.signedInUser
	});

const Index = ({isUserLoggedIn}) => (
	<NavBar isUserLoggedIn={isUserLoggedIn}/>
);

export default connect(mapStateToProps)(Index);