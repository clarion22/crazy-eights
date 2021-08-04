import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/styles.css';

function Navbar() {
	return (
		<nav class='navbar'>
			<div class='container'>
				<NavLink class='logo' to='/crazy-eights'>
					Crazy Eights
				</NavLink>
				<ul class='nav'>
					<li>
						<NavLink className='link' to='/game'>
							Game
						</NavLink>
					</li>
					<li>
						<NavLink to='/crazy-eights#about'>Connect</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
