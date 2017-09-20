import React from 'react'
import PropTypes from 'prop-types'
import GraphDisplay from './GraphDisplay'
import {Line} from 'react-chartjs-2';
import {StyleSheet, css} from 'aphrodite'
import {colors} from '../styles/variables'
import {boxShadow} from '../styles/mixins'

let options =
		{ 
            legend: {
            	display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                    }
                }]
            }
        }

const GraphBody = ({input, data, minBound, maxBound, onSetKeyClick, onAddKeyClick, 
	onClearKeyClick, onMinKeyClick, onMaxKeyClick, onDrawKeyClick}) => (
	<div className={css(styles.toolContainer)}>
		<div className={css(styles.responsiveTool, styles.purple, styles.purpleShadow)}>
			<GraphDisplay 
			input={input}
			min={minBound}
			max={maxBound}
			onInputChange={onSetKeyClick}
			onMinChange={onMinKeyClick}
			onMaxChange={onMaxKeyClick}
			onSubmit={onDrawKeyClick}
			/>
			<Line 
			data={data}
			options={options}/>
		</div>
	</div>
)

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
	purple: {
		backgroundColor: colors.purple2,
	},
	purpleShadow: boxShadow(colors.purpleShadow),
})

export default GraphBody