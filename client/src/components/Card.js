import React, { useState } from 'react';
import './styles/board.css';

function Card({ card, selectCard }) {
	return (
		<div className='card' onClick={() => selectCard(card)}>
			<div>{card.name}</div>
			<div>{card.type}</div>
			<div>{card.value}</div>
		</div>
	);
}

export default Card;
