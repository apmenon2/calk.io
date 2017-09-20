import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'
import {boxShadow, hoverShadow} from '../styles/mixins'

const GraphDisplay = ({input, min, max, onInputChange, onMinChange, onMaxChange, onSubmit}) => (
	<div className={css(styles.display)}>
		<form 
		className={css(styles.form)}
		onSubmit={(e) => {
			e.preventDefault()
			onSubmit()
		}}>
			<div 
			className={css(styles.label)}>
			f(x) = 
			</div>
			<input 
				className={css(styles.result, styles.responsiveDisplay, styles.purple)}
				placeholder=''
				type='text'
				name='input'
				autoComplete='off'
				value={input}
				onChange={ (e) => onInputChange(e.target.value)}
				onSubmit={(e) => {
					e.preventDefault()
					onSubmit()
				}}
			/>
			<div 
			className={css(styles.label)}>
			x-min
			</div>
			<input 
				className={css(styles.range, styles.responsiveDisplay, styles.purple)}
				type='text'
				name='xmin'
				autoComplete='off'
				value={min}
				onChange={ (e) => onMinChange(Number(e.target.value))}
			/>
			<div 
			className={css(styles.label)}>
			x-max
			</div>
			<input 
				className={css(styles.range, styles.responsiveDisplay, styles.purple)}
				type='text'
				name='xmax'
				autoComplete='off'
				value={max}
				onChange={ (e) => onMaxChange(Number(e.target.value))}
			/>
			<div 
			className={css(styles.key, styles.purpleShadow, styles.purpleHover)}
			onClick={(e) => {
				e.preventDefault()
				onSubmit()
			}}>
				Draw
			</div>
		</form>
	</div>
)

GraphDisplay.proptypes = {
	input: PropTypes.string.isRequired,
	min: PropTypes.string.isRequired,
	max: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onMinChange: PropTypes.func.isRequired,
	onMaxChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

export default GraphDisplay

const styles = StyleSheet.create({
	display: {
	  	textAlign: 'right',
		width: '100%',
		height: '10%',
		borderRadius: '4px',
		marginBottom: '10px'
	},
	purple: {
		backgroundColor: colors.purpleOutput
	},
	form: {
		display: 'flex',
	  	flexFlow: 'row wrap',
		height: '100%',
	},
	label: {
		display: 'flex',
	  	justifyContent: 'center',
	  	alignItems: 'center',
		width: '10%',
		height: '100%',
		backgroundColor: colors.purple3,
		fontSize: '14px',
		color: 'white',
		float: 'left',
		borderRadius: '4px 0 0 4px',
		'@media (max-width: 600px)': {
			marginLeft: '2px'
		},
		'@media (min-width: 600px)': {
			marginLeft: '10px'
		}
	},
	result: {
		border: 'none',
		fontSize: '18px',
		width: '25%',
		height: '95%',
		float: 'left',
		borderRadius: '0 4px 4px 0'
	},
	range: {
		border: 'none',
		width: '10%',
		height: '95%',
		float: 'left',
		borderRadius: '0 4px 4px 0'
	},
	responsiveDisplay: {
		'@media (max-width: 600px)': {
			fontSize: '18px'
		},
		'@media (min-width: 600px)': {
			fontSize: '14px'
		}
	},
	purpleShadow: boxShadow(colors.purpleShadow),
	purpleHover: {
		':hover' : hoverShadow(colors.purpleShadow),
	},
	key: {
		display: 'flex',
	  	justifyContent: 'center',
	  	alignItems: 'center',
	  	backgroundColor: colors.purple3,
		color: 'white',
		borderRadius: '5px',
		textAlign: 'center',
		height: '85%',
		width: '15%',
		fontSize: '18px',
		marginLeft: '5px'
	},
})