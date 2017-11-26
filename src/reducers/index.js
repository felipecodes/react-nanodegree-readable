import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
import categories from './categories'
import fetch from './fetch'

export default combineReducers({
  posts,
  comments,
  categories,
  fetch
})
