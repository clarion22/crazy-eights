import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from './components/Board';
import Instruction from './components/Instruction';

import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-198016993-3');

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/crazy-eights' exact={true}>
					<Instruction />
				</Route>
				<Route path='/game'>
					<div className='App'>
						<Board />
					</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
