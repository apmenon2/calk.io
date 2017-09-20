import math from 'mathjs'
let parser = math.parser()

let defaultState = {
	input: '',
	graphData: [],
	labels: [],
	minBound: '-10',
	maxBound: '10'
}

const generateLabels = (min, max) => {
  let labels = []
  for (let i = min; i <= max; i++) {
    labels.push(i)
  }
  return labels
}


const graph = (state = defaultState, action) => {
	switch(action.type) {
		case 'GRAPH_SET_INPUT':
			return {
				input: action.input,
				graphData: state.graphData,
				labels: state.labels,
				minBound: state.minBound,
				maxBound: state.maxBound
			}
		case 'GRAPH_ADD_INPUT':
			return {
				input: state.input + action.input,
				graphData: state.graphData,
				labels: state.labels,
				minBound: state.minBound,
				maxBound: state.maxBound
			}
		case 'GRAPH_CLEAR_INPUT':
			return {
				input: '',
				graphData: state.graphData,
				labels: state.labels,
				minBound: state.minBound,
				maxBound: state.maxBound
			}
		case 'GRAPH_SET_MIN_BOUND':
			return {
				input: state.input,
				graphData: state.graphData,
				labels: state.labels,
				minBound: action.minBound,
				maxBound: state.maxBound
			}
		case 'GRAPH_SET_MAX_BOUND':
			return {
				input: state.input,
				graphData: state.graphData,
				labels: state.labels,
				minBound: state.minBound,
				maxBound: action.maxBound
			}
		case 'GRAPH_DRAW_GRAPH':
			console.log(state)
			let newData = []
			for (let i = state.minBound; i <= state.maxBound; i++) {
				newData.push(math.eval(state.input.replace(/x/g, `(${i})`)))
			}
			console.log(newData)
			return {
				input: state.input,
				graphData: newData,
				labels: generateLabels(state.minBound, state.maxBound),
				minBound: state.minBound,
				maxBound: state.maxBound
			}
		default:
			return state
	}
}

export default graph 