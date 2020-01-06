import axios from 'axios'

const SET_RED_TRAINS = 'SET_RED_TRAINS'

const setRedTrains = redTrains => {
  return {
    type: SET_RED_TRAINS,
    redTrains
  }
}

const REDTRAINS_URL =
  '/api/1.0/ttarrivals.aspx?key=b6c386fa68f942d0b18d1c586e4126d7&mapid=41450&outputType=JSON'

export const fetchRedTrains = () => {
  return async dispatch => {
    try {
      const response = await axios.get(REDTRAINS_URL)
      dispatch(setRedTrains(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const redTrainsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RED_TRAINS:
      return action.redTrains
    default:
      return state
  }
}

export default redTrainsReducer
