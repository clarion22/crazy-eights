import React, { useEffect, CSSProperties } from 'react';
import './styles/board.css';
import styled from 'styled-components';
import { generateUnicode } from '../util/card_logic';

function Card({ card, selectCard, selected }) {
	if (!card) return null;

	// let unicode = ;
	// console.log(unicode, 'unicode');
	const CardDiv = styled.div`
		height: 200px;
		width: 160px;
		background-color: yellow;
		margin: 10px 10px;
		&:after {
			content: ${generateUnicode(card)};
			font-size: 250px;
			line-height: 0.6;
		}
		&:hover {
			height: 200px;
			width: 160px;
			background-color: lightgreen;
			margin: 10px 10px;
		}
	`;

	return (
		<CardDiv onClick={() => selectCard(card)}>
			<div>{card.name}</div>
			<div>{card.type}</div>
			<div>{card.value}</div>
		</CardDiv>
	);
}

export default Card;
