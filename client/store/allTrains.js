import axios from 'axios'

const SET_TRAINS = 'SET_TRAINS'

const setTrains = trains => {
  return {
    type: SET_TRAINS,
    trains
  }
}

const ALLTRAINS_URL =
  '/api/1.0/ttarrivals.aspx?key=b6c386fa68f942d0b18d1c586e4126d7&mapid=40710&outputType=JSON'

export const fetchTrains = () => {
  return async dispatch => {
    try {
      const response = await axios.get(ALLTRAINS_URL)
      dispatch(setTrains(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const trainsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRAINS:
      return action.trains
    default:
      return state
  }
}

export default trainsReducer
