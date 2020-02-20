import Draw from './index';

describe('draw', () => {
	const state = {
		textGuess: 'hello',
		room: {
			roundType: 'draw'
		}
	};
	let returnValue;
	beforeEach(() => {
		returnValue = Draw({ state });
	});
	it('should draw the draw component', () => {
		expect(returnValue).toMatchSnapshot();
	});
});
