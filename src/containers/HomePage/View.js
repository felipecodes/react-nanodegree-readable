import React from 'react'
import Wrap from '../../components/Wrap'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'

const View = props => (
  <Wrap>
    <PostList {...props} />
    <CategoryList {...props} />
  </Wrap>
)

export default View
