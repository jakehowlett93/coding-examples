// @flow
import React from 'react';
import { CirclePicker } from 'react-color';
import Actions from '../../../../actions';
import './colorPicker.css';

type Props = {
	state: State,
	actions: Actions
};

const ColorPicker = ({ state, actions }: Props) => {
	if (state.room.roundType === 'draw') {
		return (
			<CirclePicker
				onChangeComplete={actions.onColorChanged}
				colors={[
					'#f44336',
					'#e91e63',
					'#9c27b0',
					'#673ab7',
					'#3f51b5',
					'#2196f3',
					'#03a9f4',
					'#fff',
					'#009688',
					'#4caf50',
					'#8bc34a',
					'#cddc39',
					'#ffeb3b',
					'#ffc107',
					'#ff9800',
					'#000',
					'#795548',
					'#607d8b'
				]}
			/>
		);
	}
	return null;
};

export default ColorPicker;
