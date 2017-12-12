import { FETCH, DONE } from '../actions/constantes'

const fetch = (state = false, action) => {
  switch (action.type) {
    case FETCH:
      return true

    case DONE:
      return false

    default:
      return state
  }
}

export default fetch
