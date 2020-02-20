// @flow
import React from 'react';
import './playerBar.css';

type Props = {
	state: State
};

const PlayerBar = ({ state }: Props) => {
	const playerList = state.room.players.map((player) => (
		<li key={player.name}>
			<p className={player.currentSubmission ? 'ready' : 'waiting'}>{player.name}</p>
		</li>
	));
	return (
		<div className="playerBar">
			<h1>Players: </h1>
			<ul className="playerList">{playerList}</ul>
		</div>
	);
};

export default PlayerBar;
