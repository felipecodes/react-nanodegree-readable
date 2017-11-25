import { RECEIVE_POST } from '../actions'
import { getFormatedDate } from '../util/dateUtils'

function postDetails(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          date: getFormatedDate(action.post)
        }
      }

    default:
      return state
  }
}

export default postDetails
