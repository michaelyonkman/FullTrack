import React from 'react'
import {connect} from 'react-redux'
import {fetchRedTrains} from '../store/redTrains'

class RedTrains extends React.Component {
  componentDidMount() {
    this.props.fetchRedTrains()
  }
  render() {
    const trains = this.props.redTrains
    const date = new Date()
    const minutes = date.getMinutes()
    if (trains.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <h2 className="trainHeader">Chicago & State</h2>
        {trains.ctatt.eta.map((train, index) => (
          <div key={index} className="red">
            <h2>Red Line</h2>

            <h2>{train.destNm}</h2>
            <h3>
              {train.arrT.slice(-5, -3) - minutes === 0
                ? 'Departing'
                : train.arrT.slice(-5, -3) - minutes === 1
                  ? 'Due'
                  : train.arrT.slice(-5, -3) - minutes < 0
                    ? train.arrT.slice(-5, -3) - minutes + 60 + ' minutes'
                    : train.arrT.slice(-5, -3) - minutes + ' minutes'}
            </h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    redTrains: state.redTrains
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRedTrains: () => dispatch(fetchRedTrains())
  }
}
export default connect(mapState, mapDispatch)(RedTrains)
