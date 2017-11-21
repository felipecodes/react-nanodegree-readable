import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema } from '../util/schema'

export const FETCH = 'FETCH'
export const DONE = 'DONE'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_TOAST = 'ADD_TOAST'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'

const isFetch = () => ({ type: FETCH })
const isDone = () => ({ type: DONE })

export const voteUp = ({ id }) => ({
  type: VOTE_UP,
  id
})

export const voteDown = ({ id }) => ({
  type: VOTE_DOWN,
  id
})

const receiveCategories = ({ categories }) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

const receivePosts = ({ entities, allIds }) => ({
  type: RECEIVE_POSTS,
  entities,
  allIds
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const addToast = message => ({
  type: ADD_TOAST,
  message
})

const sortByVoteScore = ({ entities, result }) => {
  const allIds = result.posts.sort((a, b ) => {
    if (a.voteScore > b.voteScore) {
      return 1
    }

    if (b.voteScore > a.voteScore) {
      return -1
    }

    return 0
  })

  return {
    entities,
    allIds
  }
}

export const fetchPost = id => dispatch => {
  dispatch(isFetch())

  api
    .getPost(id)
    .then(response => {
      if (response && response.data) {
        return dispatch(receivePost(response.data))
      }
      // dispatch(addToast(postNotFound()))
    })
    .catch(err => dispatch(addToast(err.message)))
    .finally(isDone())
}

export const fetchPosts = category => dispatch => {
  dispatch(isFetch())

  api
    .getPosts(category)
    .then(response => {
      if (response.data && response.data.length > 0) {
        return dispatch(receivePosts(
          sortByVoteScore(normalize({ posts: response.data }, postSchema))
        ))
      }
      // dispatch(postsNotFound(category))
    })
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}

export const fetchCategoriesAndPosts = category => dispatch => {
  dispatch(isFetch())

  Promise.all([
    api.getCategories(),
    api.getPosts(category)
  ])
    .then(([categoriesResponse, postsResponse]) => {
      const categories = categoriesResponse.data
      const posts = postsResponse.data

      if (categories) {
        dispatch(receiveCategories(categories))
      }

      if (posts) {
        dispatch(receivePosts(
          sortByVoteScore(normalize({ posts }, postSchema))
        ))
      }
    })
    // TODO:
    //  - Qual requisição deu erro?
    //  - Qual a porcentagem de carregamento?
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}
