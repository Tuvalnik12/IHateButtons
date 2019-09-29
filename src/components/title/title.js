import React from 'react';

const title = (props) => {
	if (!props.fixture) {
		return null;
	}
	return (
		<div className="flex">
			<h1>{props.area}</h1>
			<h2>{props.league}</h2>
			<h2>fixture {props.fixture}</h2>
		</div>
		);
}

export default title;