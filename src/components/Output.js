import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'

const Output = ({color, output, onChange, onSubmit}) => (
	<div className={css(styles.display, styles[color])}>
		<form 
		className={css(styles.form)}
		onSubmit={(e) => {
			e.preventDefault()
			onSubmit()
		}}>
			<input 
				className={css(styles.result, styles[color], styles.responsiveDisplay)}
				placeholder=''
				type='text'
				autoComplete='off'
				value={output}
				onChange={ (e) => onChange(e.target.value)}
			/>
		</form>
	</div>
)

Output.proptypes = {
	output: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired
}

export default Output

const styles = StyleSheet.create({
	display: {
		display: 'flex',
	  	justifyContent: 'flex-end',
	  	alignItems: 'center',
	  	textAlign: 'right',
		width: '100%',
		height: '20%',
		borderRadius: '4px',
	},
	red: {
		backgroundColor: colors.redOutput
	},
	blue: {
		backgroundColor: colors.blueOutput
	},
	form: {
		height: '100%',
	},
	result: {
		border: 'none',
		fontSize: '60px',
		fontFamily: 'Digital',
		textAlign: 'right',
		width: '95%',
		height: '95%',
	},
	responsiveDisplay: {
		'@media (max-width: 600px)': {
			fontSize: '30px'
		}
	}
})