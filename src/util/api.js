import axios from 'axios'

require('promise.prototype.finally').shim()

/**
 * Helper to make request
 */

const req = opts => (
  axios({
    ...opts,
    baseURL: process.env.REACT_APP_PROXY || '',
    headers: { Authorization: 'bearer token' },
    withCredentials: false
  })
)

export const getPost = id => (
  req({
    method: 'GET',
    url: `/posts/${id}`,
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
