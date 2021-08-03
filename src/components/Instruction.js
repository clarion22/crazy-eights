import React from 'react';
import vid from '../assets/croppedcrazyeights.mp4';

function Instruction() {
	return (
		<div>
			<div>
				<h1>Rules of Crazy Eights</h1>
				<h2>Object of the game</h2>
				<span>
					The goal is to be the first player to get rid of all the
					cads in your hand
				</span>
				<ol type='1'>
					<li>You can play any card of the same suit or rank</li>
					<li>Select a card and press play to make a move</li>
					<li>Click draw card if you don't have a card to play</li>
					<li>
						If you choose an 8, you can set the next suit of the
						opponent
					</li>
				</ol>
			</div>
			<video autoPlay muted loop>
				<source src={vid} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Instruction;
