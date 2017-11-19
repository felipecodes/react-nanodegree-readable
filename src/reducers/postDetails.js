import { RECEIVE_POST } from '../actions'

function postDetails(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    default:
      return state
  }
}

export default postDetails
