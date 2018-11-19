import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({component: Component}) => {
	return(
		<Route>
			<Component />
		</Route>
	)
};

export default ProtectedRoute;