// @flow
import React from 'react';
import ColorPicker from './colorPicker';
import ThicknessSlider from './thicknessSlider';
import Actions from '../../../actions';
import onMouseDown from './canvasUtils/onMouseDown';
import onDraw from './canvasUtils/onDraw';
import onMouseUp from './canvasUtils/onMouseUp';
import './draw.css';
import '../play.css';

type Props = {
	state: State,
	actions: Actions
};

let mouseDrawing = false;

const Draw = ({ state, actions }: Props) => {
	const canvasRef = React.createRef();
	if (state.room.roundType === 'draw') {
		return (
			<div className="draw">
				<div className="canvasContainer">
					<canvas
						id="canvas"
						className="gameCanvas"
						width="1280"
						height="720"
						onMouseDown={(e) => (mouseDrawing = onMouseDown(e, canvasRef, state.pen.color, state.pen.thickness))}
						onMouseMove={(e) => {
							if (mouseDrawing) onDraw(e, canvasRef, state.pen.color, state.pen.thickness);
						}}
						onMouseUp={() => (mouseDrawing = onMouseUp(canvasRef))}
						ref={canvasRef}
					/>
				</div>
				<ColorPicker state={state} actions={actions} />
				<ThicknessSlider state={state} actions={actions} />
				<button
					className="submit"
					type="button"
					onClick={(e) => {
						actions.onSubmit(e, canvasRef.current ? canvasRef.current.toDataURL() : '');
					}}
				>
					Submit
				</button>
			</div>
		);
	}
	return null;
};

export default Draw;
