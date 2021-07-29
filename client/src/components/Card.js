import React from 'react';
import './styles/board.css';

function Card({ card }) {
	return (
		<div className='card'>
			<div>{card.name}</div>
			<div>{card.type}</div>
			<div>{card.value}</div>
		</div>
	);
}

export default Card;
