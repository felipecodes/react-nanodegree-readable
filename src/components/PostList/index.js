import React from 'react'
import { List, ListItem } from 'material-ui'
import Wrap from '../Wrap'
import BoxTitle from '../common/BoxTitle'
import { Wrapper, CustomLink } from './Styles'

const PostList = props => (
  <Wrapper>
    <List>
      {props.posts.map(post => (
        <ListItem innerDivStyle={{padding: 0}} key={post.id}>
          <CustomLink to={`/posts/${post.id}`}>{post.title}</CustomLink>
        </ListItem>
      ))}
    </List>
  </Wrapper>
)

export default PostList
