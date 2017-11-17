import { union } from 'lodash'
import { FETCH_POSTS, DONE_POSTS, RECEIVE_POSTS } from '../actions'

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

    case FETCH_POSTS:
      return {
        ...state,
        isFething: true
      }

    case DONE_POSTS:
      return {
        ...state,
        isFething: false
      }

    default:
      return state
  }
}

export default posts
