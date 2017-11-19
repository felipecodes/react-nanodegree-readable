import React, { Component } from 'react'
import Wrap from '../components/Wrap'
import PostList from './PostList'
import CategoryList from './CategoryList'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchPosts(this.props.match.params.category)
    this.props.fetchCategories()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.props.fetchPosts(nextProps.match.params.category)
    }
  }

  render() {
    return (
      <Wrap>
        <PostList {...this.props} />
        <CategoryList {...this.props} />
      </Wrap>
    )
  }
}

export default HomePage
