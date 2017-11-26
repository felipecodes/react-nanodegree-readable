import React from 'react'
import Text from '../../components/common/Text'
import { StyledBox, StyledTitle, Header, Footer, VoteScore } from './Styles'

const View = ({ post }) => {
  return (
    <StyledBox>
      <Header>
        <StyledTitle>{post.title}</StyledTitle>
        <VoteScore inline>{post.voteScore}</VoteScore>
      </Header>
      <Text>{post.body}</Text>
      <Footer>
        <Text>Autor: {post.author}</Text>
        <Text>Data: {post.date}</Text>
      </Footer>
    </StyledBox>
  )
}

View.defaultProps = {
  post: {}
}

export default View
