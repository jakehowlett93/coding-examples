// @flow

//Called when someone moves the thickness slider
const thicknessInputChanged = (state: State, event: SyntheticInputEvent<HTMLInputElement>): $Shape<State> => {
	event.preventDefault();
	const { value } = event.target;
	const newState = { pen: { ...state.pen } };
	newState.pen.thickness = parseInt(value, 10);
	return newState;
};

export default thicknessInputChanged;
