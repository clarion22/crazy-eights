import React, { useEffect, CSSProperties } from 'react';
import './styles/board.css';
import styled from 'styled-components';
import { generateUnicode } from '../util/card_logic';

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
			background-color: lightgreen;
			margin: 10px 10px;
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
