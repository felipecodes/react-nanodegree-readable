import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchCategoriesAndPosts,
  fetchPosts,
  voteUp,
  voteDown,
  sortByVoteScore,
  sortByDate
} from '../../actions'
import View from './View'

class HomePage extends Component {
  componentWillMount() {
    this.props.dataFetch(this.props.match.params.category)
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
  const { posts: { byId, allIds }, categories, fetch } = state
  const ids = match.params.category ?
    allIds.filter(id => byId[id].category === match.params.category) : allIds

  return {
    posts: ids.filter(id => !byId[id].deleted).map(id => byId[id]),
    categories,
    fetch
  }
}

const mapDispatchToProps = dispatch => ({
  dataFetch: category => dispatch(fetchCategoriesAndPosts(category)),
  fetchPosts: category => dispatch(fetchPosts(category)),
  voteUp: post => dispatch(voteUp(post)),
  voteDown: post => dispatch(voteDown(post)),
  sortByVoteScore: () => dispatch(sortByVoteScore()),
  sortByDate: () => dispatch(sortByDate())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
