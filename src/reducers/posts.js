import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import * as postUtils from '../util/postUtils'
import {
  RECEIVE_POSTS,
  RECEIVE_VOTE_SCORE,
  VOTE_UP,
  VOTE_DOWN,
  SORT_BY_VOTE_SCORE,
  SORT_BY_DATE
} from '../actions'

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
          ...action.byId
        },
        allIds: union(
          state.allIds,
          action.allIds
        )
      }

    case RECEIVE_VOTE_SCORE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: action.voteScore
          }
        }
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

    case SORT_BY_VOTE_SCORE:
      return {
        ...state,
        allIds: sortUtils.sortByVoteScore(state)
      }

    case SORT_BY_DATE:
      return {
        ...state,
        allIds: postUtils.sortByDate(state)
      }

    default:
      return state
  }
}

export default posts
