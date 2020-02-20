//@flow

import onDraw from '../onDraw';

const onMouseDown = (
	event: SyntheticDragEvent<HTMLCanvasElement>,
	canvasRef: { current: ?HTMLCanvasElement },
	color: string,
	thickness: number
) => {
	onDraw(event, canvasRef, color, thickness);
	return true;
};

export default onMouseDown;
