import PlayerBar from './index';

describe('playerBar', () => {
	const state = {
		room: { players: [{ name: 'jake' }, { name: 'joe' }, { name: 'ben' }, { name: 'ant' }] }
	};
	let returnValue;
	beforeEach(() => {
		returnValue = PlayerBar({ state });
	});
	it('should write the right component ', () => {
		expect(returnValue).toMatchSnapshot();
	});
});
