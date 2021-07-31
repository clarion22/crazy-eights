import React, { useEffect, CSSProperties, useState } from 'react';
import './styles/board.css';
import styled, { keyframes, css } from 'styled-components';
import { generateUnicode } from '../util/card_logic';

const bounce = keyframes`
	0%   { transform: translateY(0); }
	30%  { transform: translateY(-20px); }
	50%  { transform: translateY(20px); }
	100% { transform: translateY(0); }
`;

const hoverMixin = css`
	height: 200px;
	background: #e4e4e4;
	animation: ${bounce} 1s linear infinite;
	margin: 0;
`;

function Card({ card, selectCard, selected, gameSession, player, activeCard }) {
	if (!card) return null;

	const CardDiv = styled.div`
		height: 200px;
		padding-top: 10px;
		background-color: ${selected ? '#e4e4e4' : 'white'};
		width: 148px;
		margin: 10px 10px;
		transform: ${selected ? 'translateY(-20px)' : ''};
		&:after {
			content: ${generateUnicode(card)};
			font-size: 14.5em;
			line-height: 0.7;
			color: ${card.type === 'Diamonds' || card.type === 'Hearts'
				? 'red'
				: 'black'};
		}
		&:hover {
			${selected ? '' : hoverMixin}
		}
	`;
	if (gameSession && player) {
		return (
			<div style={{ width: '100px' }} onClick={() => selectCard(card)}>
				<CardDiv></CardDiv>
			</div>
		);
	} else if (gameSession && !player && !activeCard) {
		return (
			<div style={{ width: '100px' }}>
				<div className='card'></div>
			</div>
		);
	} else if (gameSession && activeCard) {
		return (
			<div style={{ width: '100px' }}>
				<CardDiv></CardDiv>
			</div>
		);
	} else {
		return <></>;
	}
}

export default Card;
