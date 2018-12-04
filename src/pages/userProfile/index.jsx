import React from 'react';
import { connect } from 'react-redux';

const UserProfilePage = ({signedInUser}) => {
	return(
		<div>
			My account {signedInUser.email}
		</div>
	);
};

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

export default connect(mapStateToProps)(UserProfilePage);