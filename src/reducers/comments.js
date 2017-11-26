import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import { RECEIVE_COMMENTS } from '../actions'

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
    default:
      return state
  }
}

export default comments
