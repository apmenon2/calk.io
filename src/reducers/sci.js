import math from 'mathjs' 

let defaultState = {
	input: '',
	answer: ''
}

const sci = (state = defaultState, action) => {
	switch(action.type) {
		case 'SCI_SET_INPUT':
			return {
				input: action.input,
				answer: state.answer
			}
		case 'SCI_ADD_INPUT':
			return {
				input: state.input + action.input,
				answer: state.answer
			}
		case 'SCI_REMOVE_INPUT':
			return {
				input: state.input.substring(0, state.input.length - 1),
				answer: state.answer
			}
		case 'SCI_CLEAR_INPUT':
			return {
				input: '',
				answer: state.answer
			}
		case 'SCI_RETURN_ANSWER':
			return {
				input: state.input + state.answer,
				answer: state.answer
			}
		case 'SCI_COMPUTE_INPUT':
			let computed = ''
			try {
				computed = math.eval(state.input)
			} catch(error) {
				computed = 'Syntax Error'
			}
			return {
				input: String(computed),
				answer: String(computed)
			}
		default:
			return state
	}
}

export default sci