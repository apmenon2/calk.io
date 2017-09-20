import math from 'mathjs' 

const calk = (state = '', action) => {
	switch(action.type) {
		case 'CALK_SET_INPUT':
			return action.input
		case 'CALK_ADD_INPUT':
			return state + action.input
		case 'CALK_REMOVE_INPUT':
			return state.substring(0, state.length - 1)
		case 'CALK_CLEAR_INPUT':
			return ''
		case 'CALK_COMPUTE_INPUT':
			let computed = ''
			try {
				computed = math.eval(state)
			} catch(error) {
				computed = 'Syntax Error'
			}
			return String(computed)
		default: 
			return state
	}
}

export default calk