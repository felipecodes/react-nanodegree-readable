import React from 'react'
import Text from '../common/Text'
import { Box, StyledTitle, List, Item, VoteScore } from './Styles'
import Controls from './Controls'

const CommentList = props => (
  <Box>
    <StyledTitle>Comentários:</StyledTitle>

    {props.comments.length ? (
      <List>
        {props.comments.map(comment =>
          <Item key={comment.id}>
            <Text>{comment.body}</Text>
            <Text inline>{comment.author}</Text>
            <VoteScore inline>{comment.voteScore}</VoteScore>
            <Controls {...props} comment={comment} />
          </Item>
        )}
      </List>
    ) : (
      <Text>Seja o primeiro a comentar nesse post</Text>
    )}

  </Box>
)

CommentList.defaultProps = {
  comments: []
}

export default CommentList
