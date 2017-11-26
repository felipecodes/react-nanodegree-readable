import React from 'react'
import Text from '../../components/common/Text'
import CommentList from '../../components/CommentList'
import { StyledBox, StyledTitle, Header, Footer, VoteScore } from './Styles'

const View = props => (
  <StyledBox>
    <Header>
      <StyledTitle>{props.post.title}</StyledTitle>
      <VoteScore inline>{props.post.voteScore}</VoteScore>
    </Header>
    <Text>{props.post.body}</Text>
    <Footer>
      <Text>Autor: {props.post.author}</Text>
      <Text>Data: {props.post.date}</Text>
    </Footer>
    <CommentList {...props} />
  </StyledBox>
)

View.defaultProps = {
  post: {}
}

export default View
