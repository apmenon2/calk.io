import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import calkApp from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

let store = createStore(calkApp)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'))
registerServiceWorker()
