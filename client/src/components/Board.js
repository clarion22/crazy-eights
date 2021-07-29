import React from 'react';
import './styles/board.css';

function Board() {
	return (
		<div className='board_wrapper'>
			<div className='deck_wrapper'>Opponent Deck</div>
			<div className='board_activecard'>
				<div className='deck_middle_wrapper'>
					<div className='deck_displayed card'>DECK</div>
					<div className='deck_activecard card'>ACTIVE CARD</div>
				</div>
			</div>
			<div className='deck_wrapper'>my deck</div>
		</div>
	);
}

export default Board;
