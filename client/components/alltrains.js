import React from 'react'
import {connect} from 'react-redux'
import {fetchTrains} from '../store/allTrains'

class AllTrains extends React.Component {
  componentDidMount() {
    this.props.fetchTrains()
  }
  render() {
    const trains = this.props.trains
    console.log(trains)
    const date = new Date()
    const minutes = date.getMinutes()
    if (trains.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <h2 className="trainHeader">Chicago & Franklin</h2>
        {trains.ctatt.eta.map((train, index) => (
          <div key={index} className={train.rt === 'P' ? 'purple' : 'brown'}>
            <h2>{train.rt === 'P' ? 'Purple Line' : 'Brown Line'}</h2>

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
    trains: state.trains
  }
}

const mapDispatch = dispatch => {
  return {
    fetchTrains: () => dispatch(fetchTrains())
  }
}
export default connect(mapState, mapDispatch)(AllTrains)
