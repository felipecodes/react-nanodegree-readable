import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removePostAsync,
  editPost,
  removeCommentAsync,
  editComment,
  fetchPostAndComments,
  addCommentAsync
} from '../../actions'
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
    .filter(id => !comments.byId[id].deleted)
    .map(id => comments.byId[id]),
  fetch
})

const mapDispatchToProps = dispatch => ({
  fetchPostAndComments: id => dispatch(fetchPostAndComments(id)),
  removePost: ({ id }) => dispatch(removePostAsync(id)),
  editPost: ({ id }) => dispatch(editPost(id)),
  removeComment: ({ id }) => dispatch(removeCommentAsync(id)),
  editComment: ({ id }) => dispatch(editComment(id)),
  addComment: comment => dispatch(addCommentAsync(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
