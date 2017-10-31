import axios from 'axios'
import { normalize } from 'normalizr'
require('promise.prototype.finally').shim()

/**
 * Helper to make request
 */

const req = (method, url, data = {}, headers = {}, params = {}) => (
  axios({
    baseURL: process.env.REACT_APP_PROXY || '',
    withCredentials: false,
    method,
    url,
    data,
    headers,
    params,
  })
)

/**
 * Get all the posts from a category
 */

export const getPosts = category => (
  req('GET', category ? `/${category}/posts` : '/posts', null, { Authorization: 'bearer token' })
)


/**
 * Get all the categories
 */

export const getCategories = () => req('GET', '/categories', null, { Authorization: 'bearer token' })
