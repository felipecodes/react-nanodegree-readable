import { unionBy } from 'lodash'
import { FETCH_CATEGORIES, DONE_CATEGORIES, RECEIVE_CATEGORIES } from '../actions'

const initialState = {
  categories: [],
  isFething: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        categories: unionBy(state.categories, action.categories, 'path'),
        isFething: state.isFething
      }

    case FETCH_CATEGORIES:
      return {
        ...state,
        isFething: true
      }

    case DONE_CATEGORIES:
      return {
        ...state,
        isFething: false
      }

    default:
      return state
  }
}

export default categories
