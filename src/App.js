import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, playCard, dealCard, opponentPlay } from './store/game';
import { validMove, movesLeft } from './util/deck_logic';

import Board from './components/Board';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Board />
		</div>
	);
}

export default App;