// @flow
import React from 'react';

import Actions from '../../../../actions';

type Props = {
	state: State,
	actions: Actions
};

const ThicknessSlider = ({ state, actions }: Props) => {
	if (state.room.roundType === 'draw') {
		return (
			<div>
				<input type="range" id="thickness" min="1" max="101" step="10" onChange={(e) => actions.onThicknessInputChanged(e)} />
			</div>
		);
	}
	return null;
};

export default ThicknessSlider;
