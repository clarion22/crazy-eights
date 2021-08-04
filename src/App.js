import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from './components/Board';
import Instruction from './components/Instruction';

import './App.css';

function App() {
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
