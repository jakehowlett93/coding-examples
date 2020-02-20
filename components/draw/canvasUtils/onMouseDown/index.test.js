import onMouseDown from './index';

import onDraw from '../onDraw';

jest.mock('../onDraw');

describe('onMouseDown', () => {
	const event = 'mock-event';
	const canvasRef = 'mock-canvas';
	const color = 'mock-color';
	const thickness = 'mock-thickness';
	let returnValue;

	beforeEach(() => {
		returnValue = onMouseDown(event, canvasRef, color, thickness);
	});

	it('should return true', () => {
		expect(returnValue).toEqual(true);
	});

	it('should call onMouseMove', () => {
		expect(onDraw).toHaveBeenCalled();
	});
});
