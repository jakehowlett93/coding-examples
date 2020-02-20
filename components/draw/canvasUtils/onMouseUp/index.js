//@flow

const onMouseUp = (canvasRef: { current: ?HTMLCanvasElement }) => {
	const canvas = canvasRef.current;
	if (canvas) {
		const context = canvas.getContext('2d');
		context.beginPath();
	}
	return false;
};

export default onMouseUp;
