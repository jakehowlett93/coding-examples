import thicknessInputChanged from './index';

describe('changedThickness', () => {
	const state = {
		pen: {
			thickness: '10'
		}
	};

	const event = {
		target: { value: '50' },
		preventDefault: jest.fn()
	};

	let returnValue;
	beforeEach(() => {
		returnValue = thicknessInputChanged(state, event);
	});

	it('should call prevent default on the event', () => {
		expect(event.preventDefault).toHaveBeenCalled();
	});

	it('should return 50 as the thickness', () => {
		expect(returnValue).toEqual({ pen: { thickness: 50 } });
	});
});
