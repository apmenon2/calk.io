import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

import CalkContainer from './containers/CalkContainer'
import SciContainer from './containers/SciContainer'
import GraphContainer from './containers/GraphContainer'



const App = () => (
	<BrowserRouter>
		<div className='container'>
			<Switch>
				<Route exact path='/' component={CalkContainer} />
				<Route exact path='/sci' component={SciContainer} />
				<Route exact path='/graph' component={GraphContainer} />
				<Route render={function() {
					return <p> Not Found </p>
				}} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default App;
