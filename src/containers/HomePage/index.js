import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../../actions';
import View from './View'

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
    return <View {...this.props} {...this.state} />
  }
}

const mapStateToProps = (state, { match }) => {
  const { posts: { byId, allIds }, categories } = state
  const ids = match.params.category ?
    allIds.filter(id => byId[id].category === match.params.category) : allIds

  return {
    posts: ids.map(id => byId[id]),
    categories
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category)),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
