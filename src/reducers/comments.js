import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import { RECEIVE_COMMENTS, RECEVE_COMMENT } from '../actions'

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

    case RECEVE_COMMENT:
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

    default:
      return state
  }
}

export default comments
