import { normalize } from 'normalizr'
import * as api from '../util/api'
import { postSchema, commentSchema } from '../util/schema'
import * as sortUtils from '../util/sortUtils'

export const FETCH = 'FETCH'
export const DONE = 'DONE'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ADD_TOAST = 'ADD_TOAST'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const RECEIVE_VOTE_SCORE = 'RECEIVE_VOTE_SCORE'
export const SORT_BY_VOTE_SCORE = 'SORT_BY_VOTE_SCORE'
export const SORT_BY_DATE = 'SORT_BY_DATE'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

const isFetch = () => ({ type: FETCH })
const isDone = () => ({ type: DONE })

const receiveComments = ({ postId, byId, allIds }) => ({
  type: RECEIVE_COMMENTS,
  postId,
  byId,
  allIds
})

const receiveVoteScore = ({ id, voteScore }) => ({
  type: RECEIVE_VOTE_SCORE,
  voteScore,
  id,
})

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

export const addComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const editPost = id => ({
  type: EDIT_POST,
  id
})

export const editComment = id => ({
  type: EDIT_COMMENT,
  id
})

const removePost = id => ({
  type: REMOVE_POST,
  id
})

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
})

const addToast = message => ({
  type: ADD_TOAST,
  message
})

export const sortByVoteScore = () => ({
  type: SORT_BY_VOTE_SCORE
})

export const sortByDate = () => ({
  type: SORT_BY_DATE
})

export const addCommentAsync = comment => dispatch => {
  dispatch(isFetch())
  dispatch(addComment(comment))

  api.addComment(comment)
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const removeCommentAsync = id => dispatch => {
  dispatch(isFetch())
  dispatch(removeComment(id))

  api.removeComment(id)
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const removePostAsync = id => dispatch => {
  dispatch(isFetch())
  dispatch(removePost(id))

  api.removePost(id)
    // .catch(error => dispatch(addToast(error.message)))
    .finally(() => dispatch(isDone()))
}

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
          allIds: sortUtils.sortByVoteScore({ byId, allIds }),
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
          allIds: sortUtils.sortByVoteScore({ byId, allIds }),
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

export const fetchPostAndComments = id => dispatch => {
  dispatch(isFetch())

  Promise.all([
    api.getPost(id),
    api.getComments(id)
  ])
    .then(([postResponse, commentsResponse]) => {
      if (postResponse && postResponse.data) {
        dispatch(receivePost(postResponse.data))
      }

      if (commentsResponse && commentsResponse.data) {
        const {
          entities: { comments: byId },
          result: { comments: allIds }
        } = normalize({ comments: commentsResponse.data } , commentSchema)

        dispatch(receiveComments({ postId: id, byId, allIds }))
      }
      // dispatch(addToast(postNotFound()))
    })
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}
