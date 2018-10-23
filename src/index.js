import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import configureStore from './configureStore';
import NavContainer from './containers/navContainer';
import PrimaryLayout from './components/primaryLayout';
import SignIn from './pages/signInPage';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff'
		},
		background: {
			paper: '#fff',
			default: '#fafafa'
		},
		primary: {
			light: 'rgba(72, 72, 72, 1)',
			main: 'rgba(33, 33, 33, 1)',
			dark: 'rgba(0, 0, 0, 1)',
			contrastText: '#fff'
		},
		secondary: {
			light: 'rgba(255, 81, 49, 1)',
			main: 'rgba(213, 0, 0, 1)',
			dark: 'rgba(155, 0, 0, 1)',
			contrastText: '#fff'
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	},
	typography: {
		useNextVariants: true
	}
});

const store = configureStore();

const App = () => (
	<MuiThemeProvider theme={theme}>
		<Router>
			<React.Fragment>
				<CssBaseline />
				<NavContainer />
				<Route exact path="/" component={PrimaryLayout} />
				<Route path="/sign-in" component={SignIn} />
			</React.Fragment>
		</Router>
	</MuiThemeProvider>
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
