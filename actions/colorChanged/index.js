// @flow

export type ColorObj = {
	hex: string,
	rgb: {
		r: number,
		g: number,
		b: number,
		a: number
	},
	hsl: {
		h: number,
		s: number,
		l: number,
		a: number
	}
};

//Called when a new color is clicked
const colorChanged = (state: State, colorObj: ColorObj): $Shape<State> => {
	const newState = { pen: { ...state.pen } };
	newState.pen.color = colorObj.hex;
	return newState;
};

export default colorChanged;
