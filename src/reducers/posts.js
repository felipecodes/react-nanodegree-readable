import { union } from 'lodash'
import { RECEIVE_POSTS, VOTE_UP, VOTE_DOWN } from '../actions'

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
          action.allIds
        )
      }

    case VOTE_UP:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: ++state.byId[action.id].voteScore
          }
        }
      }

    case VOTE_DOWN:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: --state.byId[action.id].voteScore
          }
        }
      }

    default:
      return state
  }
}

export default posts
