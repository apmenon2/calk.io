import React from 'react'
import PropTypes from 'prop-types'
import Keypad from './Keypad'
import Output from './Output'
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'
import {boxShadow} from '../styles/mixins'

const ToolBody = ({layout, theme, input, onSetKeyClick, onAddKeyClick, onRemoveKeyClick, onClearKeyClick, onComputeKeyClick, onReturnAnswerKeyClick}) => (
	<div className={css(styles.toolContainer)}>
		<div className={css(styles[theme], styles[`${theme}Shadow`], styles.responsiveTool)}>
			<Output 
			color={theme}
			output={input}
			onChange={onSetKeyClick}
			onSubmit={onComputeKeyClick}
			/>
			<Keypad 
			data={layout}
			theme={theme}
			onClick={onAddKeyClick}
			onDelete={onRemoveKeyClick}
			onClear={onClearKeyClick}
			onSubmit={onComputeKeyClick}
			onAnswer={onReturnAnswerKeyClick}/>
		</div>
	</div>
)


ToolBody.propTypes = {
	layout: PropTypes.array.isRequired,
	theme: PropTypes.string.isRequired,
	input: PropTypes.string.isRequired,
	onSetKeyClick: PropTypes.func.isRequired,
	onAddKeyClick: PropTypes.func.isRequired,
	onRemoveKeyClick: PropTypes.func.isRequired,
	onClearKeyClick: PropTypes.func.isRequired,
	onComputeKeyClick: PropTypes.func.isRequired,
	onReturnAnswerKeyClick: PropTypes.func
}

const styles = StyleSheet.create({
	toolContainer:{
		display: 'flex',
	  	justifyContent: 'center',
	  	alignItems: 'center',
	  	height: '100%',
	  	width: '100%'
	},
	responsiveTool: {
		borderRadius: '4px',
		margin: '0 auto',
		diplay: 'flex',
		flexFlow: 'row nowrap',
		//Media Queries 
		'@media (max-width: 600px)': {
			width: '90%',
			padding: '5px',
		},
		'@media (min-width: 600px)': {
			width: '600px',
			padding: '10px',
		},
		'@media (max-height: 500px)': {
			height: '90%'
		},
		'@media (min-height: 500px)': {
			height: '400px'
		}

	},
	red: {
		backgroundColor: colors.red2,
	},
	blue: {
		backgroundColor: colors.blue2,
	},
	redShadow: boxShadow(colors.redShadow),
	blueShadow: boxShadow(colors.blueShadow),
})

export default ToolBody