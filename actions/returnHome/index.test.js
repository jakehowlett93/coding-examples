import returnHome from './index';

describe('returnHome', () => {
	const event = {
		preventDefault: jest.fn()
	};

	let returnValue;
	beforeEach(() => {
		returnValue = returnHome(event);
	});
	it('should call prevent default on the event', () => {
		expect(event.preventDefault).toHaveBeenCalled();
	});

	it('should return the new page', () => {
		expect(returnValue).toEqual({ currentPage: 'home' });
	});
});
