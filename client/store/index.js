import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import trainsReducer from './allTrains'
import weatherReducer from './weatherData'
import redTrainsReducer from './redTrains'
import chicagoEbBussesReducer from './chicagoEbBusses'

const reducer = combineReducers({
  chicagoEbBusses: chicagoEbBussesReducer,
  redTrains: redTrainsReducer,
  trains: trainsReducer,
  weatherData: weatherReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
