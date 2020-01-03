import React from 'react'
import {Route, Switch} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <nav>
        FullTrack
        <a href="/">Home</a>
      </nav>
      <main>
        <h1>Welcome to FullTrack!</h1>
        <p>Your complete source for Fullstack transit tracking!</p>
        {/* <Switch>
          <Route path="/:candyId" component={SingleCandy} />
          <Route path="/" component={AllCandies} />
        </Switch> */}
      </main>
    </div>
  )
}

export default Root
