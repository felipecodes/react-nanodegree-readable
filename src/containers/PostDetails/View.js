import React from 'react'
import { StyledBox, StyledTitle } from './Styles'

const View = ({ post }) => {
  return (
    <StyledBox>
      <StyledTitle>{post.title}</StyledTitle>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.voteScore}</p>
      <p>{post.body}</p>
    </StyledBox>
  )
}

View.defaultProps = {
  post: {}
}

export default View
