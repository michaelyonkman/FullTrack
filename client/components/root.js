import React from 'react'
import {Route, Switch} from 'react-router-dom'

const date = new Date()
const time = date.toLocaleTimeString()

const Root = () => {
  return (
    <div id="head">
      <nav>
        <span>FullTrack</span>
        <div id="desc">{time}</div>
      </nav>
      <main>
        <h1>
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
