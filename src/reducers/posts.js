import { RECEIVE_POSTS, RECEIVE_POSTS_FROM_CATEGORY } from '../actions'

const initialState = {
  byId: {},
  allIds: [],
  byCategory: {}
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
    case RECEIVE_POSTS_FROM_CATEGORY:
      return {
        byId: {
          ...state.byId,
          ...action.entities.posts
        },
        allIds: [
          ...state.allIds,
          ...action.result.posts
        ],
        byCategory: {
          ...state.byCategory,
          [action.category]: [
            ...state.byCategory[action.category],
            ...action.result.posts
          ]
        }
      }
      break
    default:
      return state
  }
}

export default posts
