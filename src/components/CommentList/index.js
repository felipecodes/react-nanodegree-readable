import React from 'react'
import Text from '../common/Text'
import CommentItem from '../CommentItem'
import { Box, StyledTitle, List } from './Styles'

const CommentList = props => (
  <Box>
    <StyledTitle>Comentários:</StyledTitle>

    {props.comments.length ? (
      <List>
        {props.comments.map(comment =>
          <CommentItem
            {...props}
            key={comment.id}
            comment={comment}
          />
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
