import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, editPostAsync, removePostAsync } from '../../actions'
import View from './View'

class AdminPage extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    return <View {...this.props} />
  }
}

export default connect(
  (state, props) => ({
    post: state.posts.byId[props.match.params.id]
  }),
  dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    editPost: post => dispatch(editPostAsync(post)),
    removePost: post => dispatch(removePostAsync(post))
  })
)(AdminPage)
