import React from 'react'
import Box from '../common/Box'
import Text from '../common/Text'
import PostControls from '../PostControls'
import PostVoteControls from '../PostVoteControls'
import { Row, List, Item, Details, Score, CustomLink } from './Styles'

const PostList = props => (
  <Box>
    <List>
      {props.posts.map(post => (
        <Item key={post.id}>
          <Row>
            <CustomLink to={`/${post.category}/${post.id}`}>{post.title}</CustomLink>
            <Score>{post.voteScore}</Score>
            <PostVoteControls post={post} {...props} />
          </Row>
          <Row verticalAlign>
            <Details>
              <Text>By: {post.author}</Text>
              <Text>{post.commentCount} comments</Text>
            </Details>
            <PostControls post={post} {...props} />
          </Row>
        </Item>
      ))}
    </List>
  </Box>
)

export default PostList
