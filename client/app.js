import React from 'react'
import {
  Root,
  AllTrains,
  RedTrains,
  ChicagoEbBusses,
  ChicagoWbBusses,
  SedgwickEbBusses,
  SedgwickNbBusses
} from './components'

// import {Navbar} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Root />
      <AllTrains />
      <RedTrains />
      <ChicagoEbBusses />
      <ChicagoWbBusses />
      <SedgwickEbBusses />
      <SedgwickNbBusses />
    </div>
  )
}

export default App
