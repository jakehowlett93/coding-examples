import ColorPicker from './index';

describe('color picker', () => {
	const state = {
		room: { roundType: 'draw' }
	};

	const actions = {
		onColorChange: jest.fn()
	};
	let returnValue;
	beforeEach(() => {
		returnValue = ColorPicker({ state, actions });
	});
	it('should write the right component ', () => {
		expect(returnValue).toMatchSnapshot();
	});
});
