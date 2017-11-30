import React from 'react'
import Text from '../common/Text'
import Form from './Form'
import Controls from './Controls'
import Wrapper from './Wrapper'
import VoteScore from './VoteScore'

const View = props => (
  <Wrapper>
    {props.isEditing ? (
      <Form {...props} comment={props.comment} />
    ) : (
      <Text>{props.comment.body}</Text>
    )}

    <Text inline>{props.comment.author}</Text>
    <VoteScore inline>{props.comment.voteScore}</VoteScore>
    <Controls {...props} comment={props.comment} />
  </Wrapper>
)

export default View
