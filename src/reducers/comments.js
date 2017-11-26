import { union } from 'lodash'
import * as sortUtils from '../util/sortUtils'
import { RECEIVE_COMMENTS } from '../actions'

const initialState = {
  byId: {},
  allIds: []
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const data = union(
        state.postId || [],
        action.allIds
      )

      return {
        byId: {
          ...state.byId,
          ...action.byId
        },
        [action.postId]: data.sort((a, b) =>
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
