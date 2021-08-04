import React from 'react';
import vid from '../assets/croppedcrazyeights.mp4';
import './styles/board.css';
import './styles/styles.css';
import profilepic from './img/profilepic.jpg';
import cards from './img/cards.jpg';
import { NavLink } from 'react-router-dom';

function Instruction() {
	return (
		<div className='instruction_wrapper'>
			<nav class='navbar'>
				<div class='container'>
					<h1 class='logo'>Crazy Eights</h1>
					<ul class='nav'>
						<li>
							<NavLink className='link' to='/game'>
								Game
							</NavLink>
						</li>
						<li>
							<a href='#about'>Connect</a>
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
						<NavLink className='link' to='/game' class='btn'>
							Play Game
						</NavLink>
					</div>
					<img src={cards} alt='cards' />
				</div>
			</section>
			<section class='section-b'>
				<div class='section-b-inner py-5'>
					<video loop autoPlay muted>
						<source src={vid} type='video/mp4' /> Your browser does
						not support the video tag.
					</video>
				</div>
			</section>
			<section id='about'>
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
							<a href='https://github.com/clarion22/crazy-eights'>
								<i class='fab fa-github icon'></i>
							</a>
							<a href='https://www.linkedin.com/in/olgajt/'>
								<i class='fab fa-linkedin icon'></i>
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Instruction;
