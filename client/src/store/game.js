import { generateDeck } from '../util/deck_logic';
import _ from 'lodash';
// action types
const DEAL_DECK = 'deck/dealDeck';
const PLAY_CARD = 'deck/playCard';
const DEAL_CARD = 'deck/dealCard';
const OPPONENT_PLAY = 'deck/opponentPlay';
// actions
export const dealDeck = () => {
	return {
		type: DEAL_DECK,
	};
};

export const playCard = (payload) => {
	return {
		type: PLAY_CARD,
		payload,
	};
};

export const dealCard = () => {
	return {
		type: DEAL_CARD,
	};
};

export const opponentPlay = () => {
	return {
		type: OPPONENT_PLAY,
	};
};

const initialState = {
	deck: [],
	player: [],
	opponent: [],
	activeCard: {},
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEAL_DECK:
			let playerArr = [];
			let opponentArr = [];
			const deck = generateDeck();
			for (let i = 0; i < 8; i++) {
				playerArr.push(deck[i]);
			}
			for (let i = 8; i < 16; i++) {
				opponentArr.push(deck[i]);
			}
			deck.splice(0, 16);
			let activeCard1 = deck[0];
			deck.shift();
			return {
				...state,
				deck: deck,
				activeCard: activeCard1,
				player: playerArr,
				opponent: opponentArr,
			};
		case PLAY_CARD:
			let playedCard = action.payload;
			let playerCards = Object.values(state.player);

			let cards = playerCards.filter((card) => {
				if (!_.isEqual(card, playedCard)) {
					return card;
				}
			});
			return { ...state, player: cards, activeCard: playedCard };
		case DEAL_CARD:
			let card = state.deck[0];
			const updatedDeck = state.deck;
			updatedDeck.shift();
			let updatedPlayerArr = state.player;
			updatedPlayerArr.push(card);
			return { ...state, deck: updatedDeck, player: updatedPlayerArr };
		case OPPONENT_PLAY:
			let opponentCards = state.opponent;
			let activeCard = state.activeCard;
			let newCards = [];
			let opponentChosenCard;
			let possibleCards = opponentCards.filter((card) => {
				if (
					card.type === activeCard.type ||
					card.value === activeCard.value
				) {
					return card;
				}
			});
			if (possibleCards.length === 0) {
				let card = state.deck[0];
				let deckToUpdate = state.deck;
				deckToUpdate.shift();
				let opponentArrToUpdate = state.opponent;
				opponentArrToUpdate.push(card);
				return {
					...state,
					deck: deckToUpdate,
					opponent: opponentArrToUpdate,
				};
			} else {
				opponentChosenCard = possibleCards[0];
				newCards = opponentCards.filter((card) => {
					if (!_.isEqual(card, opponentChosenCard)) {
						return card;
					}
				});
			}
			return {
				...state,
				activeCard: opponentChosenCard,
				opponent: newCards,
			};
		default:
			return state;
	}
};

export default gameReducer;
