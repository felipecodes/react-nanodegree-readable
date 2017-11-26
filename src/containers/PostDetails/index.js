import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePostAsync, editPost, fetchPostAndComments } from '../../actions'
import View from './View'

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPostAndComments(this.props.match.params.id)
  }

  render() {
    return <View {...this.props} />
  }
}

const mapStateToProps = ({ posts, comments, fetch }, { match }) => ({
  post: posts.byId[match.params.id],
  comments: (comments[match.params.id] || [])
    .filter(id => !comments.byId[id].deleted || !comments.byId[id].parentDeleted)
    .map(id => comments.byId[id]),
  fetch
})

const mapDispatchToProps = dispatch => ({
  fetchPostAndComments: id => dispatch(fetchPostAndComments(id)),
  remove: ({ id }) => dispatch(removePostAsync(id)),
  edit: ({ id }) => dispatch(editPost(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
