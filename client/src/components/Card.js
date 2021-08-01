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

const shine = keyframes`
	to {
		background-position: 200% center;
	}
`;

const hoverMixin = css`
	height: 200px;
	background: #e4e4e4;
	animation: ${bounce} 1s linear infinite;
	margin: 0;
	cursor: pointer;
	-webkit-box-shadow: 14px 15px 15px -2px rgba(0, 0, 0, 0.66);
	box-shadow: 14px 15px 15px -2px rgba(0, 0, 0, 0.66);
`;

const gradientAnimation = css`
	text-align: center;

	background: linear-gradient(
		to right,
		#fff 20%,
		#fb00ff 40%,
		#00ffdc 60%,
		#fff 80%
	);
	background-size: 200% auto;
	color: #000;
	background-clip: text;
	text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: shine 1.5s linear infinite;
`;

function Card({
	card,
	selectCard,
	selected,
	gameSession,
	player,
	activeCard,
	setType,
}) {
	if (!card) return null;

	const CardDiv = styled.div`
		height: 200px;
		padding-top: 10px;
		background-color: ${selected ? 'black' : 'white'};
		width: 148px;
		margin: 10px 10px;
		transform: ${selected ? 'translateY(-20px)' : ''};
		&:after {
			content: ${generateUnicode(card)};
			font-size: 14.5em;
			line-height: 0.7;
			${selected
				? gradientAnimation
				: `color: ${
						card.type === 'Diamonds' || card.type === 'Hearts'
							? 'red'
							: 'black'
				  }`}
		}
		&:hover {
			${selected || activeCard ? '' : hoverMixin}
		}
		&:active {
			background-color: pink;
		}
	`;

	if (gameSession && player) {
		return (
			<div style={{ width: '100px' }} onClick={() => selectCard(card)}>
				{card.value === 8 && selected ? (
					<div className='card_typepicker'>
						<span onClick={() => setType('Spades')}>♠</span>
						<span onClick={() => setType('Diamonds')}>♦</span>
						<span onClick={() => setType('Hearts')}>♥</span>
						<span onClick={() => setType('Clubs')}>♣</span>
					</div>
				) : (
					''
				)}
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
