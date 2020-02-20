import onMouseUp from './index';

describe('onMouseUp', () => {
	const canvasRef = {
		current: {
			getContext: jest.fn()
		}
	};
	const context = {
		beginPath: jest.fn()
	};

	let returnValue;

	beforeEach(() => {
		canvasRef.current.getContext.mockReturnValue(context);
		returnValue = onMouseUp(canvasRef);
	});

	it('should return false', () => {
		expect(returnValue).toEqual(false);
	});

	it('should call beginPath', () => {
		expect(context.beginPath).toHaveBeenCalled();
	});
});
