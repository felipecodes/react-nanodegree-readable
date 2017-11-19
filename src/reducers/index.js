import { combineReducers } from 'redux'
import postDetails from './postDetails'
import posts from './posts'
import comments from './comments'
import categories from './categories'
import fetch from './fetch'

export default combineReducers({
  postDetails,
  posts,
  comments,
  categories,
  fetch
})
