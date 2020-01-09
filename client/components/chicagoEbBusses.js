/* eslint-disable no-undef */
import React from 'react'
import {connect} from 'react-redux'
import {fetchChicagoEbBusses} from '../store/chicagoEbBusses'

class ChicagoEbBusses extends React.Component {
  componentDidMount() {
    this.props.fetchChicagoEbBusses()
  }
  render() {
    const busses = this.props.chicagoEbBusses
    console.log(busses)
    if (busses.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <div className="trainHeader">
          <h2>Chicago & Franklin</h2>
          <h3>66 Chicago Busses</h3>
        </div>
        {busses['bustime-response'].prd.map((bus, index) => (
          <div key={index} className="bus">
            <h2>66 Chicago</h2>
            <h2>{bus.des}</h2>
            <h3>{bus.prdctdn === 'Due' ? 'due' : bus.prdctdn + ' minutes'}</h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    chicagoEbBusses: state.chicagoEbBusses
  }
}

const mapDispatch = dispatch => {
  return {
    fetchChicagoEbBusses: () => dispatch(fetchChicagoEbBusses())
  }
}
export default connect(mapState, mapDispatch)(ChicagoEbBusses)
