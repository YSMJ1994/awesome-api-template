import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Test from './pages/Test';
import { DocAppComponent } from '../doc/App';
import './App.scss'

const Index = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/doc" component={DocAppComponent} />
					<Route path="/" exact component={Test} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
};

export default Index;
