import axios from 'axios'

require('promise.prototype.finally').shim()

/**
 * Helper to make request
 */

const req = opts => (
  axios({
    ...opts,
    baseURL: process.env.REACT_APP_PROXY || '',
    withCredentials: false
  })
)

/**
 * Get all the posts from a category
 */

export const getPosts = (category, onDownloadProgress = null) => (
  req({
    method: 'GET',
    url: category ? `/${category}/posts` : '/posts',
    headers: { Authorization: 'bearer token' },
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
    headers: { Authorization: 'bearer token' },
    onDownloadProgress
  })
)
