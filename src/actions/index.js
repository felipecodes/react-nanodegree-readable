import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema, categorySchema } from '../util/schema'

export const FETCH = 'FETCH'
export const DONE = 'DONE'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POSTS_FROM_CATEGORY = 'RECEIVE_POSTS_FROM_CATEGORY'

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

const receivePostsFromCategory = ({ entities, result }, category) => ({
  type: RECEIVE_POSTS_FROM_CATEGORY,
  category,
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

export const fetchPosts = (category = {}) => dispatch => {
  dispatch(isFetching())

  api
    .getPosts(category.name)
    .then(response => {
      const data = normalize({ posts: response.data }, postSchema)
      dispatch(receivePosts(data))
      if (category.name) {
        dispatch(receivePostsFromCategory(data, category.name))
      }
    })
    // .catch(err => dispatch(NOTIFICATION, err.message))
    .finally(() => dispatch(isDone()))
}
