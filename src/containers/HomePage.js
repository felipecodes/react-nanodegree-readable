import React from 'react'
import Wrap from '../components/Wrap'
import PostList from './PostList'
import CategoryList from './CategoryList'

const HomePage = props => (
  <Wrap>
    <PostList {...props} />
    <CategoryList {...props} />
  </Wrap>
)

export default HomePage
