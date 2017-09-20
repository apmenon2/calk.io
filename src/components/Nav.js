import React from 'react'
import {NavLink} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'

const Nav = () => (
	<div className={css(styles.nav)}>
		<NavLink className={css(styles.navlink)} activeClassName='active' to='/'>
			CALK
		</NavLink>
		 | 
		<NavLink className={css(styles.navlink)} activeClassName='active' to='/sci'>
			SCI
		</NavLink>
		|
		<NavLink className={css(styles.navlink)} activeClassName='active' to='/graph'>
			GRAPH
		</NavLink>
	</div>
)

let styles = StyleSheet.create({
	nav: {
		margin: '0 auto'
	},
	navlink: {
		color: 'white',
		textDecoration: 'none',
		marginRight: '5px',
		marginLeft: '5px',
	}
})

export default Nav