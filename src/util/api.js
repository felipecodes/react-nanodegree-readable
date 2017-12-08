import axios from 'axios'

require('promise.prototype.finally').shim()

/**
 * Helper to make request
 */

const req = opts => (
  axios({
    ...opts,
    baseURL: process.env.REACT_APP_PROXY || '',
    headers: { Authorization: 'bearer token123' },
    withCredentials: false
  })
)

export const getPost = id => (
  req({
    method: 'GET',
    url: `/posts/${id}`
  })
)

export const removePost = id => (
  req({
    method: 'DELETE',
    url: `/posts/${id}`
  })
)

export const removeComment = id => (
  req({
    method: 'DELETE',
    url: `/comments/${id}`
  })
)

/**
 * Get all the posts from a category
 */

export const getPosts = (category, onDownloadProgress = null) => (
  req({
    method: 'GET',
    url: category ? `/${category}/posts` : '/posts',
    onDownloadProgress
  })
)


/**
 * Get all the categories
 */

export const getCategories = onDownloadProgress => (
  req({
    method: 'GET',
    url: '/categories',
    onDownloadProgress
  })
)

export const voteUp = id => (
  req({
    method: 'POST',
    url: `/posts/${id}`,
    data: { option: 'upVote' }
  })
)

export const voteDown = id => (
  req({
    method: 'POST',
    url: `/posts/${id}`,
    data: { option: 'downVote' }
  })
)

export const getComments = id => (
  req({
    method: 'GET',
    url: `/posts/${id}/comments`
  })
)

export const addComment = comment => (
  req({
    method: 'POST',
    url: '/comments',
    data: comment
  })
)

export const editComment = comment => (
  req({
    method: 'PUT',
    url: `/comments/${comment.id}`,
    data: comment
  })
)

export const voteUpComment = id => (
  req({
    method: 'POST',
    url: `/comments/${id}`,
    data: { option: 'upVote' }
  })
)

export const voteDownComment = id => (
  req({
    method: 'POST',
    url: `/comments/${id}`,
    data: { option: 'downVote' }
  })
)

export const editPost = post => (
  req({
    method: 'PUT',
    url: `/posts/${post.id}`,
    data: post
  })
)
