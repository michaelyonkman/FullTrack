import axios from 'axios'

const SET_CHICAGO_EB_BUSSES = 'SET_CHICAGO_EB_BUSSES'

const setChicagoEbBusses = chicagoEbBusses => {
  return {
    type: SET_CHICAGO_EB_BUSSES,
    chicagoEbBusses
  }
}

const CHICAGO_EB_BUSSES_URL =
  '/bustime/api/v2/getpredictions?key=tPuR5UVsXXa3Jk6MHDBrRLQGJ&rt=66&stpid=572&format=json'

export const fetchChicagoEbBusses = () => {
  return async dispatch => {
    try {
      const response = await axios.get(CHICAGO_EB_BUSSES_URL)
      dispatch(setChicagoEbBusses(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const chicagoEbBussesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHICAGO_EB_BUSSES:
      return action.chicagoEbBusses
    default:
      return state
  }
}

export default chicagoEbBussesReducer
