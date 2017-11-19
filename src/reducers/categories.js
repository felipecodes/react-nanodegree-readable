import { unionBy } from 'lodash'
import { RECEIVE_CATEGORIES } from '../actions'

const categories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return unionBy(state, action.categories, 'path')

    default:
      return state
  }
}

export default categories
