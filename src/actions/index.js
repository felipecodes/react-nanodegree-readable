import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema } from '../util/schema'

export const FETCH = 'FETCH'
export const DONE = 'DONE'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const isFetching = () => ({ type: FETCH })

const isDone = () => ({ type: DONE })

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
  dispatch(isFetching())

  api
    .getCategories()
    .then(response => dispatch(receiveCategories(response.data)))
    // .catch(err => dispatch(NOTIFICATION, err.message))
    .finally(() => dispatch(isDone()))
}

export const fetchPosts = category => dispatch => {
  dispatch(isFetching())

  api
    .getPosts(category)
    .then(response => {
      if (response.data && response.data.length > 0) {
        return dispatch(receivePosts(normalize({ posts: response.data }, postSchema)))
      }
      // dispatch(postsNotFound(category))
    })
    // .catch(err => dispatch(NOTIFICATION, err.message))
    .finally(() => dispatch(isDone()))
}
