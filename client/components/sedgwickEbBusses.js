import React from 'react'
import {connect} from 'react-redux'
import {fetchSedgwickEbBusses} from '../store/sedgwickEbBusses'

class SedgwickEbBusses extends React.Component {
  componentDidMount() {
    this.props.fetchSedgwickEbBusses()
  }
  render() {
    const busses = this.props.sedgwickEbBusses
    if (busses.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <div className="trainHeader">
          <h2>Chicago & Franklin</h2>
          <h3>37 Sedgwick Eastbound Busses</h3>
        </div>
        {busses['bustime-response'].prd.map((bus, index) => (
          <div key={index} className="bus">
            <h2>37 Sedgwick</h2>
            <h2>{bus.des}</h2>
            <h3>
              {bus.prdctdn === 'DUE'
                ? 'due'
                : bus.prdctdn === 'DLY'
                ? 'Delayed'
                : bus.prdctdn + ' minutes'}
            </h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    sedgwickEbBusses: state.sedgwickEbBusses
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSedgwickEbBusses: () => dispatch(fetchSedgwickEbBusses())
  }
}
export default connect(mapState, mapDispatch)(SedgwickEbBusses)
