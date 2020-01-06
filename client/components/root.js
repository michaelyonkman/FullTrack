import React from 'react'
import {Route, Switch} from 'react-router-dom'
import WeatherData from './weatherdata'

const Root = () => {
  return (
    <div id="head">
      <nav>
        <span>
          <span id="faster">FullTrack</span>
          <span className="links">
            {' '}
            <a href="/">Trains</a>
          </span>
          <span className="links">
            <a href="/">Busses</a>
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
        {/* <Switch>
          <Route path="/:candyId" component={SingleCandy} />
          <Route path="/" component={AllCandies} />
        </Switch> */}
      </main>
    </div>
  )
}

export default Root
