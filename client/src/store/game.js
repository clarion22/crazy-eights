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
			const deck = generateDeck();
			for (let i = 0; i < 8; i++) {
				state.player.push(deck[i]);
			}
			for (let i = 8; i < 16; i++) {
				state.opponent.push(deck[i]);
			}
			deck.splice(0, 16);
			state.activeCard = deck[0];
			deck.shift();
			state.deck = deck;
			return state;
		case PLAY_CARD:
			let playedCard = action.payload;
			let playerCards = Object.values(state.player);

			let cards = playerCards.filter((card) => {
				if (!_.isEqual(card, playedCard)) {
					return card;
				}
			});
			state.player = cards;
			state.activeCard = playedCard;
			return state;
		case DEAL_CARD:
			let card = state.deck[0];
			state.deck.shift();
			state.player.push(card);
			return state;
		case OPPONENT_PLAY:
			let opponentCards = state.opponent;
			let activeCard = state.activeCard;
			let possibleCards = opponentCards.filter((card) => {
				if (
					card.type === activeCard.type ||
					card.value === activeCard.value
				) {
					return card;
				}
			});
			console.log('POSSIBLE CARDS', possibleCards);
			if (possibleCards.length === 0) {
				let card = state.deck[0];
				state.deck.shift();
				state.opponent.push(card);
			} else {
				let playedCard = possibleCards[0];
				let cards = opponentCards.filter((card) => {
					if (!_.isEqual(card, playedCard)) {
						return card;
					}
				});
				state.opponent = cards;
				state.activeCard = playedCard;
			}
			return state;
		default:
			return state;
	}
};

export default gameReducer;
