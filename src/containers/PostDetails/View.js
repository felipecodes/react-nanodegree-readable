import React from 'react'

const View = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.voteScore}</p>
      <p>{post.body}</p>
    </div>
  )
}

View.defaultProps = {
  post: {}
}

export default View
