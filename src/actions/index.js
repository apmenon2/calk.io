// CALK ACTIONS --------------------------------------------

export const calkSetInput = (input) => {
	return {
		type: 'CALK_SET_INPUT',
		input
	}
}

export const calkAddInput = (input) => {
	return {
		type: 'CALK_ADD_INPUT',
		input
	}
}

export const calkRemoveInput = () => {
	return {
		type: 'CALK_REMOVE_INPUT'
	}
}

export const calkClearInput = () => {
	return {
		type: 'CALK_CLEAR_INPUT'
	}
}

export const calkComputeInput = () => {
	return {
		type: 'CALK_COMPUTE_INPUT'
	}
}

// SCI ACTIONS --------------------------------------------

export const sciSetInput = (input) => {
	return {
		type: 'SCI_SET_INPUT',
		input
	}
}

export const sciAddInput = (input) => {
	return {
		type: 'SCI_ADD_INPUT',
		input
	}
}

export const sciRemoveInput = () => {
	return {
		type: 'SCI_REMOVE_INPUT'
	}
}

export const sciClearInput = () => {
	return {
		type: 'SCI_CLEAR_INPUT'
	}
}

export const sciReturnAnswer = () => {
	return {
		type: 'SCI_RETURN_ANSWER'
	}
}

export const sciComputeInput = () => {
	return {
		type: 'SCI_COMPUTE_INPUT'
	}
}

// GRAPH ACTIONS --------------------------------------------

export const graphSetInput = (input) => {
	return {
		type: 'GRAPH_SET_INPUT',
		input
	}
}

export const graphAddInput = (input) => {
	return {
		type: 'GRAPH_ADD_INPUT',
		input
	}
}

export const graphClearInput = () => {
	return {
		type: 'GRAPH_CLEAR_INPUT'
	}
}

export const graphSetMinBound = (minBound) => {
	return {
		type: 'GRAPH_SET_MIN_BOUND',
		minBound
	}
}

export const graphSetMaxBound = (maxBound) => {
	return {
		type: 'GRAPH_SET_MAX_BOUND',
		maxBound
	}
}

export const graphDrawGraph = () => {
	return {
		type: 'GRAPH_DRAW_GRAPH'
	}
}