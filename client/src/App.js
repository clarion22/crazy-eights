import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, playCard, dealCard, opponentPlay } from './store/game';
import { validMove, movesLeft } from './util/deck_logic';

import Board from './components/Board';

import './App.css';

function App() {
	const activeCard = useSelector((state) => state.game.activeCard);
	const player = useSelector((state) => state.game.player);
	const dispatch = useDispatch();

	const testFunc = () => {
		dispatch(dealDeck());
	};

	const testFunc2 = (card) => {
		if (validMove(card, activeCard)) {
			dispatch(playCard(card));
			setTimeout(() => dispatch(opponentPlay()), 1000);
		} else {
			console.log('not a valid move');
		}
	};

	const testFunc3 = () => {
		dispatch(dealCard());
	};
	useEffect(() => {
		if (!movesLeft(player, activeCard)) {
			console.log('No moves left');
		}
	}, [activeCard]);
	return (
		<div className='App'>
			<Board />
		</div>
	);
}

export default App;
