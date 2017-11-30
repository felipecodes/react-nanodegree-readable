import React, { Component } from 'react'
import View from './View'

class CommentItem extends Component {
  state = { isEditing: false }

  openCommentForm = () => {
    this.setState({ isEditing: true })
  }

  closeCommentForm = () => {
    this.setState({ isEditing: false })
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        openCommentForm={this.openCommentForm}
        closeCommentForm={this.closeCommentForm}
      />
    )
  }
}

export default CommentItem
