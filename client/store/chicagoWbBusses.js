import axios from 'axios'

const SET_CHICAGO_WB_BUSSES = 'SET_CHICAGO_WB_BUSSES'

const setChicagoWbBusses = chicagoWbBusses => {
  return {
    type: SET_CHICAGO_WB_BUSSES,
    chicagoWbBusses
  }
}

const CHICAGO_WB_BUSSES_URL =
  '/bustime/api/v2/getpredictions?key=tPuR5UVsXXa3Jk6MHDBrRLQGJ&rt=66&stpid=606&format=json'

export const fetchChicagoWbBusses = () => {
  return async dispatch => {
    try {
      const response = await axios.get(CHICAGO_WB_BUSSES_URL)
      dispatch(setChicagoWbBusses(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const chicagoWbBussesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHICAGO_WB_BUSSES:
      return action.chicagoWbBusses
    default:
      return state
  }
}

export default chicagoWbBussesReducer
