const generateUnicode = (card) => {
	let unicode = [0, 0];
	if (card) {
		switch (card.type) {
			case 'Spades':
				unicode[0] = 'A';
				break;
			case 'Hearts':
				unicode[0] = 'B';
				break;
			case 'Diamonds':
				unicode[0] = 'C';
				break;
			case 'Clubs':
				unicode[0] = 'D';
				break;
		}
		switch (true) {
			case card.value > 0 && card.value < 10:
				unicode[1] = card.value;
				break;
			case card.value === 10:
				unicode[1] = 'A';
				break;
			case card.value === 11:
				unicode[1] = 'B';
				break;
			case card.value === 12:
				unicode[1] = 'D';
				break;
			case card.value === 13:
				unicode[1] = 'E';
				break;
		}
		return '\\\\1F0' + unicode.join('');
	}
};
