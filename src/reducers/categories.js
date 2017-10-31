import { RECEIVE_CATEGORIES } from '../actions'

const initialState = []

const categories = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return [
          ...state,
          ...action.categories
      ]
      return
    default:
      return state
  }
}

export default categories
