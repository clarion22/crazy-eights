import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, playCard, dealCard, opponentPlay } from './store/game';
import { validMove, movesLeft } from './util/deck_logic';

import Board from './components/Board';
import Instruction from './components/Instruction';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/crazy-eights' exact={true}>
					<Instruction />
				</Route>
				<Route path='/tutorial'>
					<div className='App'>
						<Board />
					</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
