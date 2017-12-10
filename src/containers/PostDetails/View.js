import React from 'react'
import { Divider } from 'material-ui'
import Text from '../../components/common/Text'
import Wrap from '../../components/Wrap'
import CommentList from '../../components/CommentList'
import CommentForm from '../../components/CommentForm'
import { StyledBox, StyledTitle, Header, Footer, VoteScore } from './Styles'
import Controls from './Controls'

const View = props => (
  <StyledBox>
    {props.post.id ? (
      <Wrap>
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
      </Wrap>
    ) : (
      <div>post is not found</div>
    )}
  </StyledBox>
)

View.defaultProps = {
  post: {}
}

export default View
