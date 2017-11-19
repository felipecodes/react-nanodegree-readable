import React from 'react'

const PostList = props => (
  <div>
    <h1>PostList</h1>
    <ul>
      {this.props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
)

export default PostList
