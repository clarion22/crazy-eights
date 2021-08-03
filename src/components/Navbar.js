import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/nav.css';

function Navbar() {
	return (
		<div className='navbar'>
			<NavLink to='/crazy-eights' className='navbar--home'>
				Crazy Eights
			</NavLink>
		</div>
	);
}

export default Navbar;
