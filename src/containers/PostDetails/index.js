import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostAndComments } from '../../actions'
import View from './View'

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPostAndComments(this.props.match.params.id)
  }

  render() {
    return <View {...this.props} />
  }
}

const mapStateToProps = ({ postDetails, comments, fetch }, { match }) => ({
  post: postDetails[match.params.id],
  comments: (comments[match.params.id] || [])
    .filter(id => !comments.byId[id].deleted || !comments.byId[id].parentDeleted)
    .map(id => comments.byId[id]),
  fetch
})

const mapDispatchToProps = dispatch => ({
  fetchPostAndComments: id => dispatch(fetchPostAndComments(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
