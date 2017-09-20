import { combineReducers } from 'redux'
import calk from './calk'
import sci from './sci'
import graph from './graph'

const calkApp = combineReducers({
	calk,
	sci,
	graph
})

export default calkApp