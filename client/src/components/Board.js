import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, dealCard } from '../store/game';
import Card from './Card';
import './styles/board.css';

let divs = [];
for (let i = 0; i < 8; i++) {
	divs.push(<div key={i} className='card'></div>);
}

function Board() {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.game.player);
	const opponent = useSelector((state) => state.game.opponent);
	const activeCard = useSelector((state) => state.game.activeCard);

	const [gameSession, setGameSession] = useState(false);

	const beginGame = () => {
		setGameSession(true);
		dispatch(dealDeck());
	};

	const giveCard = () => {
		dispatch(dealCard());
	};

	return (
		<div className='board_wrapper'>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>
					{opponent.map((card) => {
						return <Card card={card} />;
					})}
				</div>
			</div>
			<div className='board_activecard'>
				<div className='deck_middle_wrapper'>
					<div>
						<button onClick={beginGame}>Start Game</button>
						<button onClick={giveCard}>Deal Card</button>
					</div>
					<div id='deck_displayed' className='card'>
						DECK
					</div>
					<Card card={activeCard} />
				</div>
			</div>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>
					{player.map((card) => {
						return <Card card={card} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Board;
