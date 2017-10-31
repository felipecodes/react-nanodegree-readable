import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import { fetchPosts } from '../actions'

class PostListContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts(this.props.category)
  }

  render() {
    return <PostList {...this.props} />
  }
}

const mapStateToProps = ({ posts: { byId, allIds } }, { category }) => ({
  posts: allIds.map(id => byId[id]),
  category
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer)

