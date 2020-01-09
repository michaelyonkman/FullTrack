import axios from 'axios'

const SET_SEDGWICK_EB_BUSSES = 'SET_SEDGWICK_EB_BUSSES'

const setSedgwickEbBusses = sedgwickEbBusses => {
  return {
    type: SET_SEDGWICK_EB_BUSSES,
    sedgwickEbBusses
  }
}

const SEDGWICK_EB_BUSSES_URL =
  '/bustime/api/v2/getpredictions?key=tPuR5UVsXXa3Jk6MHDBrRLQGJ&rt=37&stpid=572&format=json'

export const fetchSedgwickEbBusses = () => {
  return async dispatch => {
    try {
      const response = await axios.get(SEDGWICK_EB_BUSSES_URL)
      dispatch(setSedgwickEbBusses(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const sedgwickEbBussesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEDGWICK_EB_BUSSES:
      return action.sedgwickEbBusses
    default:
      return state
  }
}

export default sedgwickEbBussesReducer
