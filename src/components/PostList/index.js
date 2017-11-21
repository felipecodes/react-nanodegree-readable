import React from 'react'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import Wrap from '../Wrap'
import BoxTitle from '../common/BoxTitle'
import { Wrapper, List, Item, Score, IconWrapper, CustomLink } from './Styles'

const PostList = props => (
  <Wrapper>
    <List>
      {props.posts.map(post => (
        <Item
          key={post.id}
          innerDivStyle={{
            display: 'flex',
            padding: 0
          }}
        >
          <CustomLink to={`/posts/${post.id}`}>{post.title}</CustomLink>
          <Score>{post.voteScore}</Score>
          <IconWrapper onClick={props.vote}>
            <ThumbUp
              style={{
                width: '16px',
                color: '#08b135'
              }}
            />
          </IconWrapper>
          <IconWrapper onClick={props.vote}>
            <ThumbDown
              style={{
                width: '16px',
                color: '#e02100'
              }}
            />
          </IconWrapper>
        </Item>
      ))}
    </List>
  </Wrapper>
)

export default PostList
