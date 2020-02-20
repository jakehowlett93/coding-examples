// @flow
//Called when the home button is clicked
const returnHome = (event: SyntheticEvent<HTMLButtonElement>): $Shape<State> => {
	event.preventDefault();
	const newState = { currentPage: 'home' };
	return newState;
};

export default returnHome;
