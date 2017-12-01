import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  VOTE_UP_COMMENT,
  RECEIVE_COMMENT_VOTE_SCORE,
  VOTE_DOWN_COMMENT
} from '../actions'

const comments = (state = { byId: {} }, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const ids = union(
        state.postId || [],
        action.allIds
      )

      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.byId
        },
        [action.postId]: ids.sort((a, b) =>
          sortUtils.sortByBig(
            action.byId[a].voteScore,
            action.byId[b].voteScore
          )
        )
      }

    case RECEIVE_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: action.comment
        },
        [action.comment.parentId]: union(
          state[action.comment.parentId] || [],
          [action.comment.id]
        )
      }

    case REMOVE_COMMENT:
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

    case EDIT_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: {
            ...state.byId[action.comment.id],
            ...action.comment
          }
        }
      }

    case VOTE_UP_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: state.byId[action.id].voteScore + 1
          }
        }
      }

    case VOTE_DOWN_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: state.byId[action.id].voteScore - 1
          }
        }
      }

    case RECEIVE_COMMENT_VOTE_SCORE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            voteScore: action.voteScore,
          }
        }
      }

    default:
      return state
  }
}

export default comments
