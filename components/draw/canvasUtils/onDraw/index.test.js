import onDraw from './index';

describe('onDraw', () => {
	const event = {
		clientX: 200,
		clientY: 400
	};
	const rect = {
		left: 100,
		right: 150,
		top: 125,
		bottom: 175
	};
	const canvasRef = {
		current: {
			getContext: jest.fn(),
			getBoundingClientRect: jest.fn(),
			width: '640',
			height: '480'
		}
	};
	const context = {
		lineTo: jest.fn(),
		stroke: jest.fn(),
		beginPath: jest.fn(),
		moveTo: jest.fn(),
		strokeStyle: 'mock-style',
		lineCap: 'mock-style'
	};
	const color = 'mock-color';
	const thickness = 10;

	beforeEach(() => {
		canvasRef.current.getBoundingClientRect.mockReturnValue(rect);
		canvasRef.current.getContext.mockReturnValue(context);
		onDraw(event, canvasRef, color, thickness);
	});

	it('should set context.lineWidth to 1', () => {
		expect(context.lineWidth).toEqual(1);
	});

	it('should set context.strokeStyle to mock-color', () => {
		expect(context.strokeStyle).toEqual('mock-color');
	});

	it('should set context.lineCap to round', () => {
		expect(context.lineCap).toEqual('round');
	});

	it('should call lineTo', () => {
		expect(context.lineTo).toHaveBeenCalledWith(1280, 2640);
	});

	it('should call stroke', () => {
		expect(context.stroke).toHaveBeenCalled();
	});

	it('should call beginPath', () => {
		expect(context.beginPath).toHaveBeenCalled();
	});

	it('should call moveTo', () => {
		expect(context.moveTo).toHaveBeenCalledWith(1280, 2640);
	});
});
