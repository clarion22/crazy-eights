// generates a standard 52 card deck
const makeDeck = () => {
	const deck = [];
	const types = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
	let index = 0;
	while (index < types.length) {
		for (let i = 1; i < 14; i++) {
			const card = { value: 0, type: '', name: '' };
			card.value = i;
			card.type = types[index];
			if (i === 1) {
				card.name = 'Ace';
			} else if (i === 11) {
				card.name = 'Jack';
			} else if (i === 12) {
				card.name = 'Queen';
			} else if (i === 13) {
				card.name = 'King';
			} else {
				card.name = i;
			}
			deck.push(card);
		}
		index++;
	}
	return deck;
};

// shuffles an array
const shuffle = (arr) => {
	let currentIndex = arr.length;
	let randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// swap elements
		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex],
			arr[currentIndex],
		];
	}
	return arr;
};

export const generateDeck = () => {
	return shuffle(makeDeck());
};

export const validMove = (card, activeCard) => {
	if (card.type === activeCard.type || card.value === activeCard.value)
		return true;
	return false;
};

export const movesLeft = (hand, activeCard) => {
	let movesLeft = false;
	hand.forEach((card) => {
		if (card.value === activeCard.value || card.type === activeCard.type) {
			movesLeft = true;
		}
	});
	return movesLeft;
};
