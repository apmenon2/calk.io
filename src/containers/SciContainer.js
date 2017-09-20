import React from 'react'
import { connect } from 'react-redux'
import { sciSetInput, sciAddInput, sciRemoveInput, sciClearInput, sciReturnAnswer, sciComputeInput } from '../actions'
import ToolBody from '../components/ToolBody'
import Header from '../components/Header'

let sciLayout = [
	{
		display: 'x!',
		value: '!',
		class: 'blue4'
	},
	{
		display: 'x<sup>2</sup>',
		value: '^2',
		class: 'blue4'
	},
	{
		display: 'sin',
		value: 'sin(',
		class: 'blue4'
	},
	{
		display: 'csc',
		value: 'csc(',
		class: 'blue4'
	},
	{
		display: 'sinh',
		value: 'sinh(',
		class: 'blue4'
	},
	{
		display: '&radic;x',
		value: '^0.5',
		class: 'blue4'
	},
	{
		display: 'x<sup>3</sup>',
		value: '^3',
		class: 'blue4'
	},
	{
		display: 'cos',
		value: 'cos(',
		class: 'blue4'
	},
	{
		display: 'sec',
		value: 'sec(',
		class: 'blue4'
	},
	{
		display: 'cosh',
		value: 'cosh(',
		class: 'blue4'
	},
	{
		display: '<sup>3</sup>&radic;x',
		value: '^(1/3)',
		class: 'blue4'
	},
	{
		display: '1/x',
		value: '(1/',
		class: 'blue4'
	},
	{
		display: 'tan',
		value: 'tan(',
		class: 'blue4'
	},
	{
		display: 'cot',
		value: 'cot(',
		class: 'blue4'
	},
	{
		display: 'tanh',
		value: 'tanh(',
		class: 'blue4'
	},
	{
		display: 7,
		value: 7,
		class: 'blue3'
	},
	{
		display: 4,
		value: 4,
		class: 'blue3'
	},
	{
		display: 1,
		value: 1,
		class: 'blue3'
	},
	{
		display: 0,
		value: 0,
		class: 'blue3'
	},
	{
		display: 'DEL',
		value: 'DEL',
		class: 'blueContrast'
	},
	{
		display: 8,
		value: 8,
		class: 'blue3'
	},
	{
		display: 5,
		value: 5,
		class: 'blue3'
	},
	{
		display: 2,
		value: 2,
		class: 'blue3'
	},
	{
		display: '.',
		value: '.',
		class: 'blue3'
	},
	{
		display: 'AC',
		value: 'AC',
		class: 'blueContrast'
	},
	{
		display: 9,
		value: 9,
		class: 'blue3'
	},
	{
		display: 6,
		value: 6,
		class: 'blue3'
	},
	{
		display: 3,
		value: 3,
		class: 'blue3'
	},
	{
		display: ',',
		value: ',',
		class: 'blue3'
	},
	{
		display: 'ANS',
		value: 'ANS',
		class: 'blueContrast'
	},
	{
		display: '/',
		value: '/',
		class: 'blue4'
	},
	{
		display: '*',
		value: '*',
		class: 'blue4'
	},
	{
		display: '-',
		value: '-',
		class: 'blue4'
	},
	{
		display: '+',
		value: '+',
		class: 'blue4'
	},
	{
		display: '^',
		value: '^',
		class: 'blue4'
	},
	{
		display: 'log',
		value: 'log(',
		class: 'blue4'
	},
	{
		display: 'ln',
		value: 'ln(',
		class: 'blue4'
	},
	{
		display: '(',
		value: '(',
		class: 'blue4'
	},
	{
		display: ')',
		value: ')',
		class: 'blue4'
	},
	{
		display: '=',
		value: '=',
		class: 'blue5'
	},

]

class SciContainer extends React.Component {
	componentDidMount() {
		document.body.classList.add('blue-body');
	}
	componentWillUnmount() {
		document.body.classList.remove('blue-body');
	}
	render() {
		return (
			<div>
			  <Header 
			  route='SCI' 
			  theme='blue'/>
			  <ToolBody {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	layout: sciLayout,
  	theme: 'blue',
    input: state.sci.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSetKeyClick: (input) => {
  	  dispatch(sciSetInput(input))
  	},
    onAddKeyClick: (input) => {
      dispatch(sciAddInput(input))
    },
    onRemoveKeyClick: () => {
      dispatch(sciRemoveInput())
    },
    onClearKeyClick: () => {
      dispatch(sciClearInput())
    },
    onReturnAnswerKeyClick: () => {
      dispatch(sciReturnAnswer())
    },
    onComputeKeyClick: () => {
      dispatch(sciComputeInput())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SciContainer)

