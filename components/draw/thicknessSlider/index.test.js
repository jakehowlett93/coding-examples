import ThicknessSlider from './index';

describe('thickness slider', () => {
	const state = {
		room: { roundType: 'draw' }
	};

	const actions = {
		onThicknessInputChanged: jest.fn()
	};
	let returnValue;
	beforeEach(() => {
		returnValue = ThicknessSlider({ state, actions });
	});
	it('should write the right component ', () => {
		expect(returnValue).toMatchSnapshot();
	});
});
