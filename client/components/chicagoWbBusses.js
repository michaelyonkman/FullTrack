import React from 'react'
import {connect} from 'react-redux'
import {fetchChicagoWbBusses} from '../store/chicagoWbBusses'

class ChicagoWbBusses extends React.Component {
  componentDidMount() {
    this.props.fetchChicagoWbBusses()
  }
  render() {
    const busses = this.props.chicagoWbBusses
    if (busses.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <div className="trainHeader">
          <h2>Chicago & Franklin</h2>
          <h3>66 Chicago Westbound Busses</h3>
        </div>
        {busses['bustime-response'].prd.map((bus, index) => (
          <div key={index} className="bus">
            <h2>66 Chicago</h2>
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
    chicagoWbBusses: state.chicagoWbBusses
  }
}

const mapDispatch = dispatch => {
  return {
    fetchChicagoWbBusses: () => dispatch(fetchChicagoWbBusses())
  }
}
export default connect(mapState, mapDispatch)(ChicagoWbBusses)
