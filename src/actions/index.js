import { normalize } from 'normalizr'
import * as api from '../util/api'
import uuid from 'uuid/v1'
import { postSchema, commentSchema } from '../util/schema'
import * as sortUtils from '../util/sortUtils'
import {
  FETCH,
  DONE,
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  // ADD_TOAST,
  RECEIVE_VOTE_SCORE,
  SORT_BY_VOTE_SCORE,
  SORT_BY_DATE,
  REMOVE_POST,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  RECEIVE_COMMENT_VOTE_SCORE,
  RECEIVE_EDITED_POST
} from './constantes'

const isFetch = () => ({ type: FETCH })
const isDone = () => ({ type: DONE })

const receiveEditedPost = post => ({
  type: RECEIVE_EDITED_POST,
  post
})

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

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

const removePost = id => ({
  type: REMOVE_POST,
  id
})

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})

// const addToast = message => ({
//   type: ADD_TOAST,
//   message
// })


const receiveCommentVoteScore = ({ id, voteScore }) => ({
  type: RECEIVE_COMMENT_VOTE_SCORE,
  voteScore,
  id
})

export const sortByVoteScore = () => ({
  type: SORT_BY_VOTE_SCORE
})

export const sortByDate = () => ({
  type: SORT_BY_DATE
})

export const createPost = post => dispatch => {
  dispatch(isFetch())

  api.createPost({
    ...post,
    id: uuid(),
    timestamp: (new Date()).getTime(),
  })
    .then(response => dispatch(receivePost(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const editPostAsync = post => dispatch => {
  dispatch(isFetch())

  api.editPost(post)
    .then(response => dispatch(receiveEditedPost(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const voteDownCommentAsync = id => (dispatch, getState) => {
  dispatch(isFetch())

  api.voteDownComment(id)
    .then(response => dispatch(receiveCommentVoteScore(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const voteUpCommentAsync = id => (dispatch, getState) => {
  dispatch(isFetch())

  api.voteUpComment(id)
    .then(response => dispatch(receiveCommentVoteScore(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const editCommentAsync = comment => dispatch => {
  dispatch(isFetch())

  api.editComment(comment)
    .then(response => dispatch(editComment(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const addCommentAsync = comment => dispatch => {
  dispatch(isFetch())

  api.addComment(comment)
    .then(response => dispatch(addComment(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const removeCommentAsync = id => dispatch => {
  dispatch(isFetch())

  api.removeComment(id)
    .then(response =>  dispatch(removeComment(response.data)))
    // .catch(error => dispatch(addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const removePostAsync = id => dispatch => {
  dispatch(isFetch())

  api.removePost(id)
    .then(response => dispatch(removePost(id)))
    // .catch(error => dispatch(addToast(error.message)))
    .finally(() => dispatch(isDone()))
}

export const voteUp = ({ id }) => (dispatch, getState) => {
  dispatch(isFetch())

  api.voteUp(id)
    .then(response => dispatch((receiveVoteScore(response.data))))
    // .catch(error => addToast(error.message))
    .finally(() => dispatch(isDone()))
}

export const voteDown = ({ id }) => (dispatch, getState) => {
  dispatch(isFetch())

  api.voteDown(id)
    .then(response => dispatch((receiveVoteScore(response.data))))
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
      const post = postResponse.data
      const comments = commentsResponse.data

      if (post && post.id) {
        dispatch(receivePost(post))
      }

      if (comments && comments.length) {
        const {
          entities: { comments: byId },
          result: { comments: allIds }
        } = normalize({ comments } , commentSchema)

        dispatch(receiveComments({ postId: id, byId, allIds }))
      }
      // dispatch(addToast(postNotFound()))
    })
    // .catch(err => dispatch(addToast(err.message)))
    .finally(() => dispatch(isDone()))
}
