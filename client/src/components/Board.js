import React from 'react';
import './styles/board.css';

let divs = [];
for (let i = 0; i < 8; i++) {
	divs.push(<div key={i} className='card'></div>);
}

function Board() {
	return (
		<div className='board_wrapper'>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>{divs}</div>
			</div>
			<div className='board_activecard'>
				<div className='deck_middle_wrapper'>
					<div id='deck_displayed' className='card'>
						DECK
					</div>
					<div id='deck_activecard' className='card'>
						ACTIVE CARD
					</div>
				</div>
			</div>
			<div className='deck_wrapper'>
				<div className='deck_content_wrapper'>{divs}</div>
			</div>
		</div>
	);
}

export default Board;
