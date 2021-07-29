import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, playCard, dealCard, opponentPlay } from './store/game';
import { validMove, movesLeft } from './util/deck_logic';

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
		<div>
			<div>Hello</div>
			<button onClick={testFunc}>Click Me</button>
			<button
				onClick={() =>
					testFunc2({ value: 8, type: 'Diamonds', name: 8 })
				}
			>
				Play Card
			</button>
			<button onClick={testFunc3}>Deal Me a Card</button>
		</div>
	);
}

export default App;
