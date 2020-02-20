import colorChanged from './index';

describe('colorChanged', () => {
	const state = {
		pen: {
			color: '#000'
		}
	};
	const colorObj = {
		hex: 'mock-color'
	};

	let returnValue;
	beforeEach(() => {
		returnValue = colorChanged(state, colorObj);
	});

	it('should return mock-color', () => {
		expect(returnValue).toEqual({ pen: { color: 'mock-color' } });
	});
});
