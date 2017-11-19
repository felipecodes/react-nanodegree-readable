import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'
import View from './View'

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    return <View {...this.props} />
  }
}

const mapStateToProps = ({ postDetails, fetch }, { match }) => ({
  post: postDetails[match.params.id],
  fetch
})

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
