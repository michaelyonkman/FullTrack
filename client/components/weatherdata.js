import React from 'react'
import {connect} from 'react-redux'
import {fetchWeatherData} from '../store/weatherData'

const date = new Date()
const time = date.toLocaleTimeString()

class WeatherData extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherData()
  }
  render() {
    const weather = this.props.weatherData
    console.log(weather)
    if (!weather.weather) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      const temp = weather.main.temp
      return (
        <React.Fragment>
          <span className="weatherData">{time}</span>
          <span className="weatherData">{weather.weather[0].description}</span>
          <span className="weatherData">{Math.floor(temp)} °</span>
        </React.Fragment>
      )
    }
  }
}

const mapState = state => {
  return {
    weatherData: state.weatherData
  }
}

const mapDispatch = dispatch => {
  return {
    fetchWeatherData: () => dispatch(fetchWeatherData())
  }
}

export default connect(mapState, mapDispatch)(WeatherData)
