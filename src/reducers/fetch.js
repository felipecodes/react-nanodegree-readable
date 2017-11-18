import {
  FETCH_POSTS,
  FETCH_CATEGORIES,
  DONE_POSTS,
  DONE_CATEGORIES
} from '../actions'

const POSTS = 'posts'
const CATEGORIES = 'categories'

const fetch = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [
        ...state,
        POSTS
      ]

    case FETCH_CATEGORIES:
      return [
        ...state,
        CATEGORIES
      ]

    case DONE_POSTS:
      return state.filter(_ => _ !== POSTS)

    case DONE_CATEGORIES:
      return state.filter(_ => _ !== CATEGORIES)

    default:
      return state
  }
}

export default fetch
