import React, { useEffect, CSSProperties } from 'react';
import './styles/board.css';
import styled, { keyframes } from 'styled-components';
import { generateUnicode } from '../util/card_logic';

const bounce = keyframes`
	0%   { transform: translateY(0); }
	30%  { transform: translateY(-20px); }
	50%  { transform: translateY(20px); }
	100% { transform: translateY(0); }
`;

function Card({ card, selectCard, selected, gameSession }) {
	if (!card) return null;

	const CardDiv = styled.div`
		height: 200px;
		padding-top: 10px;
		background-color: white;
		width: 148px;
		margin: 10px 10px;
		&:after {
			content: ${generateUnicode(card)};
			font-size: 14.5em;
			line-height: 0.7;
		}
		&:hover {
			height: 200px;
			background: #f3e5a0;
			background: -webkit-linear-gradient(top left, #f3e5a0, #c5d8c2);
			background: -moz-linear-gradient(top left, #f3e5a0, #c5d8c2);
			background: linear-gradient(to bottom right, #f3e5a0, #c5d8c2);
			animation: ${bounce} 1s linear infinite;
			margin: 0;
		}
	`;
	if (gameSession) {
		return (
			<div style={{ width: '100px' }} onClick={() => selectCard(card)}>
				<CardDiv></CardDiv>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default Card;
