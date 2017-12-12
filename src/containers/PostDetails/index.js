import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removePostAsync,
  removeCommentAsync,
  editCommentAsync,
  fetchPostAndComments,
  addCommentAsync,
  voteUpCommentAsync,
  voteDownCommentAsync,
  voteUp,
  voteDown
} from '../../actions'
import View from './View'

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPostAndComments(this.props.match.params.id)
  }

  editPost = ({ id }) => {
    this.props.history.push(`/admin/edit/post/${id}`)
  }

  render() {
    return <View {...this.props} editPost={this.editPost} />
  }
}

const mapStateToProps = ({ posts, comments, fetch }, { match }) => {
  const post = posts.byId[match.params.id] || {}
  return {
    post: post.deleted ? {} : post,
    comments: (comments[match.params.id] || [])
      .filter(id => !comments.byId[id].deleted)
      .map(id => comments.byId[id]),
    fetch
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPostAndComments: id => dispatch(fetchPostAndComments(id)),
  removePost: ({ id }) => dispatch(removePostAsync(id)),
  removeComment: ({ id }) => dispatch(removeCommentAsync(id)),
  editComment: comment => dispatch(editCommentAsync(comment)),
  addComment: comment => dispatch(addCommentAsync(comment)),
  voteUp: post => dispatch(voteUp(post)),
  voteDown: post => dispatch(voteDown(post)),
  voteUpComment: ({ id }) => dispatch(voteUpCommentAsync(id)),
  voteDownComment: ({ id }) => dispatch(voteDownCommentAsync(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
