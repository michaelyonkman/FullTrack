import React from 'react'
import {connect} from 'react-redux'
import {fetchSedgwickNbBusses} from '../store/sedgwickNbBusses'

class SedgwickNbBusses extends React.Component {
  componentDidMount() {
    this.props.fetchSedgwickNbBusses()
  }
  render() {
    const busses = this.props.sedgwickNbBusses
    if (busses.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <div className="trainHeader">
          <h2>Orleans & Huron</h2>
          <h3>37 Sedgwick Northbound Busses</h3>
        </div>
        {busses['bustime-response'].prd.map((bus, index) => (
          <div key={index} className="bus">
            <h2>37 Sedgwick</h2>
            <h2>{bus.des}</h2>
            <h3>{bus.prdctdn === 'DUE' ? 'due' : bus.prdctdn + ' minutes'}</h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    sedgwickNbBusses: state.sedgwickNbBusses
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSedgwickNbBusses: () => dispatch(fetchSedgwickNbBusses())
  }
}
export default connect(mapState, mapDispatch)(SedgwickNbBusses)
