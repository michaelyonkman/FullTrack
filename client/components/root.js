import React from 'react'
import {Route, Switch} from 'react-router-dom'
import WeatherData from './weatherdata'

const Root = () => {
  return (
    <div id="head">
      <nav>
        <span className="faster">FullTrack</span>
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
