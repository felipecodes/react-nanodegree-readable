import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, List, Item } from './Styles'

const PostList = props => (
  <div>
    <h1>PostList</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default PostList
