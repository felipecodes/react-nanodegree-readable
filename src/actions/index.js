import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema } from '../util/schema'
import * as postUtils from '../util/postUtils'

export const FETCH = 'FETCH'
export const DONE = 'DONE'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_TOAST = 'ADD_TOAST'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const RECEIVE_VOTE_SCORE = 'RECEIVE_VOTE_SCORE'
export const SORT_BY_VOTE_SCORE = 'SORT_BY_VOTE_SCORE'
export const SORT_BY_DATE = 'SORT_BY_DATE'

const isFetch = () => ({ type: FETCH })
const isDone = () => ({ type: DONE })

const receiveVoteScore = ({ id, voteScore }) => ({
  type: RECEIVE_VOTE_SCORE,
  voteScore,
  id,
})

export const sortByVoteScore = () => ({
  type: SORT_BY_VOTE_SCORE
})

export const sortByDate = () => ({
  type: SORT_BY_DATE
})

export const voteUp = ({ id }) => (dispatch, getState) => {
  const { posts: { byId } } = getState()
  const { voteScore } = byId[id]

  dispatch(isFetch())
  dispatch({ type: VOTE_UP, id })

  api.voteUp(id)
    .then(response => {
      const post = response.data
      if (post.voteScore < voteScore || post.voteScore > voteScore + 1) {
        dispatch((receiveVoteScore(post)))
      }
    })
    // .catch(error => addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const voteDown = ({ id }) => (dispatch, getState) => {
  const { posts: { byId } } = getState()
  const { voteScore } = byId[id]

  dispatch(isFetch())
  dispatch({ type: VOTE_DOWN, id })

  api.voteDown(id)
    .then(response => {
      const post = response.data
      if (post.voteScore < voteScore - 1 || post.voteScore >= voteScore) {
        dispatch((receiveVoteScore(post)))
      }
    })
    // .catch(error => addToast(error.message))
    .finally(() => dispatch(isDone()))
}

const receiveCategories = ({ categories }) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

const receivePosts = ({ byId, allIds }) => ({
  type: RECEIVE_POSTS,
  byId,
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
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}

export const fetchPosts = category => dispatch => {
  dispatch(isFetch())

  api
    .getPosts(category)
    .then(response => {
      if (response.data && response.data.length > 0) {
        const {
          entities: { posts: byId },
          result: { posts: allIds }
        } = normalize({ posts: response.data }, postSchema)

        dispatch(receivePosts({
          allIds: postUtils.sortByVoteScore({ byId, allIds }),
          byId
        }))
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
        const {
          entities: { posts: byId },
          result: { posts: allIds }
        } = normalize({ posts }, postSchema)

        dispatch(receivePosts({
          allIds: postUtils.sortByVoteScore({ byId, allIds }),
          byId
        }))
      }
    })
    // TODO:
    //  - Qual requisição deu erro?
    //  - Qual a porcentagem de carregamento?
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}
