import React from 'react'
import { connect } from 'react-redux'
import { calkSetInput, calkAddInput, calkRemoveInput, calkClearInput, calkComputeInput } from '../actions'
import ToolBody from '../components/ToolBody'
import Header from '../components/Header'

let calkLayout = [
  {
    display: 7,
    value: 7,
    class: 'red3'
  },
  {
    display: 4,
    value: 4,
    class: 'red3'
  },
  {
    display: 1,
    value: 1,
    class: 'red3'
  },
  {
    display: 0,
    value: 0,
    class: 'red3'
  },
  {
    display: 8,
    value: 8,
    class: 'red3'
  },
  {
    display: 5,
    value: 5,
    class: 'red3'
  },
  {
    display: 2,
    value: 2,
    class: 'red3'
  },
  {
    display: '.',
    value: '.',
    class: 'red3'
  },
  {
    display: 9,
    value: 9,
    class: 'red3'
  },
  {
    display: 6,
    value: 6,
    class: 'red3'
  },
  {
    display: 3,
    value: 3,
    class: 'red3'
  },
  {
    display: 'C',
    value: 'C',
    class: 'red3'
  },
  {
    display: '/',
    value: '/',
    class: 'red4'
  },
  {
    display: '*',
    value: '*',
    class: 'red4'
  },
  {
    display: '-',
    value: '-',
    class: 'red4'
  },
  {
    display: '+',
    value: '+',
    class: 'red4'
  },
  {
    display: '^',
    value: '^',
    class: 'red4'
  },
  {
    display: '(',
    value: '(',
    class: 'red4'
  },
  {
    display: ')',
    value: ')',
    class: 'red4'
  },
  {
    display: '=',
    value: '=',
    class: 'red5'
  },
]

class CalkContainer extends React.Component {
  componentDidMount() {
    document.body.classList.add('red-body');
  }
  componentWillUnmount() {
    document.body.classList.remove('red-body');
  }
  render() {
    return (
      <div>
        <Header 
        route='CALK'
        theme='red'/>
        <ToolBody {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layout: calkLayout,
    theme: 'red',
    input: state.calk
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSetKeyClick: (input) => {
  	  dispatch(calkSetInput(input))
  	},
    onAddKeyClick: (input) => {
      dispatch(calkAddInput(input))
    },
    onRemoveKeyClick: () => {
      dispatch(calkRemoveInput())
    },
    onClearKeyClick: () => {
      dispatch(calkClearInput())
    },
    onComputeKeyClick: () => {
      dispatch(calkComputeInput())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalkContainer)