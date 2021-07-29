import React, { useEffect } from 'react';
import './styles/board.css';

function Card({ card, selectCard, selected }) {
	const updateCard = (card) => {
		selectCard(card);
	};

	useEffect(() => {
		console.log(selected, 'selected');
	}, []);
	return (
		<div
			className={selected ? 'card--selected' : 'card'}
			onClick={() => updateCard(card)}
		>
			<div>{card.name}</div>
			<div>{card.type}</div>
			<div>{card.value}</div>
		</div>
	);
}

export default Card;
