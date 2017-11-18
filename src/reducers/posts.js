import { union } from 'lodash'
import { RECEIVE_POSTS } from '../actions'

const initialState = {
  byId: {},
  allIds: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.entities.posts
        },
        allIds: union(
          state.allIds,
          action.result.posts
        )
      }

    default:
      return state
  }
}

export default posts
