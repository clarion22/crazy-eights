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
	const [type, setType] = useState('');
	const [winner, setWinner] = useState(false);
	const [message, setMessage] = useState('');
	const [isValidMove, setisValidMove] = useState(false);

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
				dispatch(
					opponentPlay(
						card.value === 8 && type.length === 0 ? card.type : type
					)
				);
				setTotalMoves((prev) => prev + 1);
			}, 1000);
			setType('');
		} else {
			setisValidMove(true);
			setTimeout(() => setisValidMove(false), 3000);
		}
	};

	const checkWin = () => {
		if (gameSession) {
			if (player.length === 0) {
				setWinner(true);
				setMessage('CONGRATS YOU WON THE GAME');
			}
			if (deck.length === 0) {
				setWinner(true);
				setMessage('SORRY ITS A TIE');
			}
			if (opponent.length === 0) {
				setWinner(true);
				setMessage('YOU LOSE');
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
						<div>{message}</div>
						{gameSession ? (
							<>
								<button
									className='board_btn'
									onClick={giveCard}
								>
									Draw Card
								</button>
								<button
									className='board_btn'
									onClick={() =>
										makeMove(selectedCard.current)
									}
								>
									Play Card
								</button>
							</>
						) : (
							<button className='board_btn' onClick={beginGame}>
								Start Game
							</button>
						)}
						{/* <div>YOU CHOSE TYPE: {type} </div> */}
						{isValidMove ? (
							<div className='board_heading'>
								<span>NOT A VALID MOVE</span>
							</div>
						) : (
							''
						)}
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
								setType={setType}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Board;
