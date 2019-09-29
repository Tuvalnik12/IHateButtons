import React from 'react';

const GameCard = (props) => {
	return (
		<div >
			<div 
			className= 
			'tc items-start white bg-navy dib 
			br3 pa2 ma1 dim bw2 shadow-5'
			style= {{ 
				width: '400px'}}
			>
				<p>{props.group}</p>
				<p className= 'b'>{props.homeTeam} - {props.awayTeam}</p>
			</div>
		</div>
		);
}

export default GameCard;