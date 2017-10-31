import { RECEIVE_POSTS } from '../actions'

const initialState = {
  byId: {},
  allIds: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        byId: {
          ...state.byId,
          ...action.entities.posts
        },
        allIds: [
          ...state.allIds,
          ...action.result.posts
        ]
      }
      return
    default:
      return state
  }
}

export default posts
