import React from 'react';
import vid from '../assets/croppedcrazyeights.mp4';
import dice from '../assets/dice2.jpg';
import './styles/board.css';
import Navbar from './Navbar';
import './styles/styles.css';
import profilepic from './img/profilepic.jpg';
import cards from './img/cards.jpg';

function Instruction() {
	return (
		<div className='instruction_wrapper'>
			<nav class='navbar'>
				<div class='container'>
					<h1 class='logo'>Crazy Eights</h1>
					<ul class='nav'>
						<li>
							<a href='#home'>Home</a>
						</li>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#specs'>Specs</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<section class='section-a'>
				<div class='container'>
					<div>
						<h1>The rules of the game.</h1>
						<p>
							The goal of the game is to get rid of all the cards
							in your hand. You can select a card with the same
							type, value, or an 8. If you choose an 8 you can set
							the next suit. If you run out of cards, click draw
							card. Press play after selecting your card to make a
							move.
						</p>
						<a href='#' class='btn'>
							Play Game
						</a>
					</div>
					<img src={cards} alt='cards' />
				</div>
			</section>
			<section id='about' class='section-b'>
				<div class='overlay' />
				<div class='section-b-inner py-5' />
			</section>
			<section>
				<div class='about_wrapper'>
					<div class='aboutcontent_wrapper'>
						<h1>About me</h1>
						<img
							id='profilepic'
							src={profilepic}
							alt='profilepic'
						/>
						<h2>Olga Thompson</h2>
						<p>Full Stack Software Engineer</p>
						<p>
							<a>github</a>
							<a>linkedin</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Instruction;
