import React from 'react'
import {Route, Switch} from 'react-router-dom'
import WeatherData from './weatherdata'
import {
  AllTrains,
  RedTrains,
  ChicagoEbBusses,
  ChicagoWbBusses,
  SedgwickEbBusses,
  SedgwickNbBusses
} from './index'

const Root = () => {
  return (
    <div id="head">
      <nav>
        <span>
          <span id="faster">
            <a href="/">FullTrack</a>
          </span>
          <span className="links">
            {' '}
            <a href="/trains">Trains</a>
          </span>
          <span className="links">
            <a href="/busses">Busses</a>
          </span>
        </span>

        <div>
          <WeatherData />
        </div>
      </nav>
      <main>
        <h1 className="faster">
          Welcome to <span>FullTrack!</span>
        </h1>
        <div id="desc">
          Your complete source for Fullstack Academy transit tracking!
        </div>

        <Switch>
          <Route
            path="/trains"
            render={props => (
              <div>
                <AllTrains />
                <RedTrains />
              </div>
            )}
          />
          <Route
            path="/busses"
            render={props => (
              <div>
                <ChicagoEbBusses />
                <ChicagoWbBusses />
                <SedgwickEbBusses />
                <SedgwickNbBusses />
              </div>
            )}
          />
          <Route
            path="/"
            render={props => (
              <div>
                <AllTrains />
                <RedTrains />
                <ChicagoEbBusses />
                <ChicagoWbBusses />
                <SedgwickEbBusses />
                <SedgwickNbBusses />
              </div>
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default Root
