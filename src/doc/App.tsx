import React, { FC } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import '../app/styles/fix.scss';
import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import loadIcon from '../utils/loadIcon';
import combineProvider from '../utils/combineProvider';
import { Provider as menuProvider } from './ctx/menu';
import { Provider as apisProvider } from './ctx/apis';

loadIcon.load();

const Provider = combineProvider([apisProvider, menuProvider]);

export const DocAppComponent: FC<RouteComponentProps> = ({ match }) => {
	console.log('match', match);
	const { path } = match;
	return (
		<Provider>
			<div className="doc-wrap">
				<Header />
				<div className="doc-main">
					<Menu />
					<Main />
				</div>
			</div>
		</Provider>
	);
};

const App = () => {
	return (
		<div className="app">
			<Router basename={process.env.API_DOC_BASE_URL}>
				<Route component={DocAppComponent} />
			</Router>
		</div>
	);
};

export default App;
