import React from 'react';
import './styles/board.css';

function Card({ card }) {
	return (
		<div className='card'>
			{card.name}
			{card.type}
			{card.value}
		</div>
	);
}

export default Card;
