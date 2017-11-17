import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema } from '../util/schema'

export const FETCH_POSTS = 'FETCH_POSTS'
export const DONE_POSTS = 'DONE_POSTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const DONE_CATEGORIES = 'DONE_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const isFetchingPosts = () => ({ type: FETCH_POSTS })
const isDonePosts = () => ({ type: DONE_POSTS })
const isFetchingCategories = () => ({ type: FETCH_CATEGORIES })
const isDoneCategories = () => ({ type: DONE_CATEGORIES })

const receiveCategories = ({ categories }) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

const receivePosts = ({ entities, result }) => ({
  type: RECEIVE_POSTS,
  entities,
  result
})

export const fetchCategories = () => dispatch => {
  dispatch(isFetchingCategories())

  api
    .getCategories()
    .then(response => dispatch(receiveCategories(response.data)))
    // .catch(err => dispatch(NOTIFICATION, err.message))
    .finally(() => dispatch(isDoneCategories()))
}

export const fetchPosts = category => dispatch => {
  dispatch(isFetchingPosts())

  api
    .getPosts(category)
    .then(response => {
      if (response.data && response.data.length > 0) {
        return dispatch(receivePosts(normalize({ posts: response.data }, postSchema)))
      }
      // dispatch(postsNotFound(category))
    })
    // .catch(err => dispatch(NOTIFICATION, err.message))
    .finally(() => dispatch(isDonePosts()))
}
