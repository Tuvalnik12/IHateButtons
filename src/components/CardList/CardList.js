import React from 'react';
import styles from './CardList.css'
import GameCard from '../gamecard/GameCard';

const CardList = ({ matches }) => {

	return (	
		<div className='flex flex-wrap'>
			{	
			matches.map((match, i) => {
					return (
					 	<GameCard 
						key={i}
						group={matches[i].match.group}
						homeTeam={matches[i].match.homeTeam.name} 
						awayTeam={matches[i].match.awayTeam.name} />
						)
				})		
			}
		</div>
		)
	}

export default CardList;

