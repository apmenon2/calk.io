import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'
import {textShadow} from '../styles/mixins'

const Header = ({route, theme}) => (
	<div className={css(styles.header)}>
		<div className={css(styles.logo, styles[`${theme}Shadow`])}>
			{route}
		</div>
		<Nav />
	</div>
)

Header.propTypes = {
	route: PropTypes.string.isRequired
}

let styles = StyleSheet.create({
	header: {
		textAlign: 'center',
		width: 'auto',
		marginBottom: '50px',
		color: 'white',
	},
	logo: {
		fontSize: '64px',
	},
	blueShadow: textShadow(colors.blueShadow), 
	redShadow: textShadow(colors.redShadow), 
	purpleShadow: textShadow(colors.purpleShadow), 
})

export default Header