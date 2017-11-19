import React from 'react'
import Wrap from '../../components/Wrap'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'
import Loading from '../../components/Loading'

const View = props => (
  <Wrap>
    <PostList {...props} />
    <CategoryList {...props} />

    {props.fetch && (
      <Loading />
    )}
  </Wrap>
)

export default View
