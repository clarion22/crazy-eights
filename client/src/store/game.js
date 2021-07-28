import { generateDeck } from '../util/deck_logic';
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
			deck.unshift();
			state.deck = deck;
			return state;
		case PLAY_CARD:
			let playedCard = action.payload;
			let playerCards = Object.values(state.player);
			playerCards.forEach((card) => {
				console.log(card.name === playedCard.name, card);
			});
			let cards = playerCards.filter((card) => {
				if (
					card.name !== playedCard.name &&
					card.type !== playedCard.type &&
					card.value !== playedCard.value
				) {
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
				// deal card
			} else {
				let playedCard = possibleCards[0];
				opponentCards.forEach((card) => {
					console.log(card.name === playedCard.name, card);
				});
				let cards = opponentCards.filter((card) => {
					if (
						card.name !== playedCard.name &&
						card.type !== playedCard.type &&
						card.value !== playedCard.value
					) {
						return card;
					}
				});
				state.opponent = cards;
				state.activeCard = playedCard;
				return state;
			}
		default:
			return state;
	}
};

export default gameReducer;
