import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dealDeck, dealCard, playCard, opponentPlay } from '../store/game';
import { validMove, movesLeft } from '../util/deck_logic';
import Card from './Card';
import _ from 'lodash';
import './styles/board.css';

function Board() {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.game.player);
	const opponent = useSelector((state) => state.game.opponent);
	const deck = useSelector((state) => state.game.deck);
	const activeCard = useSelector((state) => state.game.activeCard);

	const [gameSession, setGameSession] = useState(false);
	const [chosenCard, setChosenCard] = useState({});
	const [totalMoves, setTotalMoves] = useState(0);
	const [winner, setWinner] = useState(false);

	const selectedCard = useRef({ name: '', value: 0, type: '' });

	const beginGame = () => {
		setGameSession(true);
		dispatch(dealDeck());
	};

	const giveCard = () => {
		dispatch(dealCard());
		setTotalMoves((prev) => prev + 1);
	};

	const selectCard = (card) => {
		selectedCard.current = card;
		setChosenCard(card);
		console.log('currentCard', selectedCard.current);
	};

	const makeMove = (card) => {
		if (validMove(card, activeCard)) {
			dispatch(playCard(card));
			setTimeout(() => {
				dispatch(opponentPlay());
				setTotalMoves((prev) => prev + 1);
			}, 1000);
		} else {
			console.log('not a valid move');
		}
	};

	const checkWin = () => {
		if (gameSession) {
			if (player.length === 0) {
				setWinner(true);
			}
			if (deck.length === 0) {
				setWinner(true);
			}
		}
	};

	useEffect(() => {
		console.log('player', player);
		checkWin();
	}, [totalMoves]);

	return (
		<div className='board_wrapper'>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>
					{opponent.map((card, index) => {
						return (
							<Card
								key={index}
								card={card}
								selectCard={selectCard}
								selected={false}
								gameSession={gameSession}
								player={false}
								activeCard={false}
							/>
						);
					})}
				</div>
			</div>
			<div className='board_activecard'>
				<div className='deck_middle_wrapper'>
					<div>
						{winner ? <div>Congrats you won!!!</div> : ''}
						<button onClick={beginGame}>Start Game</button>
						<button onClick={giveCard}>Deal Card</button>
						<button onClick={() => makeMove(selectedCard.current)}>
							Play
						</button>
					</div>
					<div id='deck_displayed'></div>
					<Card
						card={activeCard}
						gameSession={gameSession}
						player={false}
						activeCard={true}
					/>
					<p className='ace'></p>
				</div>
			</div>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>
					{player.map((card, index) => {
						return (
							<Card
								key={index}
								card={card}
								selectCard={selectCard}
								selected={_.isEqual(card, chosenCard)}
								gameSession={gameSession}
								player={true}
								activeCard={false}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Board;
