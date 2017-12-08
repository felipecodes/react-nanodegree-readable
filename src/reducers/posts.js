import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import * as postUtils from '../util/postUtils'
import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_VOTE_SCORE,
  VOTE_UP,
  VOTE_DOWN,
  SORT_BY_VOTE_SCORE,
  SORT_BY_DATE,
  REMOVE_POST,
  EDIT_POST,
  RECEIVE_EDITED_POST
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

    case RECEIVE_POST:
    case RECEIVE_EDITED_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.post.id]: action.post
        },
        allIds: union(
          state.allIds,
          [action.post.id]
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

    case REMOVE_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            deleted: true
          }
        }
      }

    default:
      return state
  }
}

export default posts
