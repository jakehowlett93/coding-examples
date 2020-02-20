//@flow

const onDraw = (
	event: SyntheticDragEvent<HTMLCanvasElement>,
	canvasRef: { current: ?HTMLCanvasElement },
	color: string,
	thickness: number
) => {
	const canvas = canvasRef.current;
	if (canvas) {
		const context = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
		const y = ((event.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
		context.lineWidth = thickness / 10; //divided by 10 to make the thickness values more reasonable
		context.strokeStyle = color;
		context.lineCap = 'round';
		context.lineTo(x, y);
		context.stroke();
		context.beginPath();
		context.moveTo(x, y);
	}
};

export default onDraw;
