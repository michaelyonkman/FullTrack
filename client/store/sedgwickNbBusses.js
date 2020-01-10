import axios from 'axios'

const SET_SEDGWICK_NB_BUSSES = 'SET_SEDGWICK_NB_BUSSES'

const setSedgwickNbBusses = sedgwickNbBusses => {
  return {
    type: SET_SEDGWICK_NB_BUSSES,
    sedgwickNbBusses
  }
}

const SEDGWICK_NB_BUSSES_URL =
  '/bustime/api/v2/getpredictions?key=tPuR5UVsXXa3Jk6MHDBrRLQGJ&rt=37&stpid=6713&format=json'

export const fetchSedgwickNbBusses = () => {
  return async dispatch => {
    try {
      const response = await axios.get(SEDGWICK_NB_BUSSES_URL)
      dispatch(setSedgwickNbBusses(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const sedgwickNbBussesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEDGWICK_NB_BUSSES:
      return action.sedgwickNbBusses
    default:
      return state
  }
}

export default sedgwickNbBussesReducer
