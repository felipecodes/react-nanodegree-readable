import React from 'react'
import { Divider } from 'material-ui'
import Text from '../../components/common/Text'
import CommentList from '../../components/CommentList'
import CommentForm from '../../components/CommentForm'
import { StyledBox, StyledTitle, Header, Footer, VoteScore } from './Styles'
import Controls from './Controls'

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
    <Controls {...props} />

    <Divider style={{marginTop: '20px', marginBottom: '20px'}} />
    <CommentForm {...props} />

    <Divider style={{marginTop: '20px', marginBottom: '20px'}} />
    <CommentList {...props} />
  </StyledBox>
)

View.defaultProps = {
  post: {}
}

export default View
