import React from 'react'
import { connect } from 'react-redux'
import { graphSetInput, graphAddInput, graphClearInput, graphSetMinBound, graphSetMaxBound, graphDrawGraph } from '../actions'
import GraphBody from '../components/GraphBody'
import Header from '../components/Header'


class GraphContainer extends React.Component {
	componentDidMount() {
		document.body.classList.add('purple-body');
	}
	componentWillUnmount() {
		document.body.classList.remove('purple-body');
	}
	render() {
		return (
			<div>
			  <Header 
			  route='GRAPH' 
			  theme='purple'/>
			  <GraphBody {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    input: state.graph.input,
    data: {
      labels: state.graph.labels,
      datasets: [
        { 
          borderColor: "white",
          fill: false,
          data: state.graph.graphData
        }
      ]
    },
    minBound: state.graph.minBound,
    maxBound: state.graph.maxBound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSetKeyClick: (input) => {
  	  dispatch(graphSetInput(input))
  	},
    onAddKeyClick: (input) => {
      dispatch(graphAddInput(input))
    },
    onClearKeyClick: () => {
      dispatch(graphClearInput())
    },
    onMinKeyClick: (min) => {
      dispatch(graphSetMinBound(min))
    },
    onMaxKeyClick: (max) => {
      dispatch(graphSetMaxBound(max))
    },
    onDrawKeyClick: () => {
      dispatch(graphDrawGraph())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphContainer)