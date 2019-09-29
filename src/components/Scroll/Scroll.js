import React from 'react';
import './Scroll.css'


const Scroll = ({getCompititionFixtures, children}) => {
	return (
			<div 
			className='scroll'
			style={{
				overflowY: 'scroll', 
				border:'1px solid dark-grey', 
				height:'500px'
			}}>
				 {children}
			</div>
		);
};


export default Scroll;


