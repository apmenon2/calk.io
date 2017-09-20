import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'
import {boxShadow, hoverShadow} from '../styles/mixins'

const Keypad = ({data, theme, onClear, onSubmit, onClick, onDelete, onAnswer}) => (
	<div className={css(styles.keypad)}>
		{
			data.map(function(item) {
				return (
					<div 
					className={css(styles.key, styles[item.class], styles[`${theme}Shadow`], styles[`${theme}Hover`])}
					key={item.value}
					onClick={(() => {
				        switch (item.value) {
				          case "C":   return onClear.bind(null)
				          case "AC":   return onClear.bind(null)
				          case "DEL":   return onDelete.bind(null)
				          case "ANS":   return onAnswer.bind(null)
				          case "=":   return onSubmit.bind(null)
				          default:    return onClick.bind(null, item.value)
				        }
					})()}
					dangerouslySetInnerHTML={{__html: item.display}}
					>
					</div>
				)
			}, this)
		}
	</div>
)

Keypad.propTypes = {
	data: PropTypes.array.isRequired,
	theme: PropTypes.string.isRequired,
	onClear: PropTypes.func,
	onSubmit: PropTypes.func,
	onClick: PropTypes.func,
	onDelete: PropTypes.func,
	onAnswer: PropTypes.func,
}

export default Keypad

const styles = StyleSheet.create({
	keypad: {
		display: 'flex',
		flexFlow: 'column wrap',
		height: '80%',
		borderRadius: '4px',
		width: '100%',
		marginTop: '10px'
	},
	key: {
		display: 'flex',
	  	justifyContent: 'center',
	  	alignItems: 'center',

		color: 'white',
		borderRadius: '5px',
		textAlign: 'center',
		

		'@media (max-width: 600px)': {
			fontSize: '16px',
			margin: '3px',
		},
		'@media (min-width: 600px)': {
			fontSize: '28px',
			margin: '5px',
		},
	},
	red3: {
		backgroundColor: colors.red3,
		height: '20%',
	},
	red4: {
		backgroundColor: colors.red4,
		height: '20%',
	},
	red5: {
		backgroundColor: colors.red5,
		height: '20%',
	},
	blue3: {
		backgroundColor: colors.blue3,
		height: '16%',
	},
	blue4: {
		backgroundColor: colors.blue4,
		height: '16%',
	},
	blue5: {
		backgroundColor: colors.blue5,
		height: '16%',
	},
	blueContrast: {
		backgroundColor: colors.red3,
		height: '16%',
	},
	redShadow: boxShadow(colors.redShadow),
	blueShadow: boxShadow(colors.blueShadow),
	redHover: {
		':hover' : hoverShadow(colors.redShadow),
	},
	blueHover: {
		':hover' : hoverShadow(colors.blueShadow),
	}
})