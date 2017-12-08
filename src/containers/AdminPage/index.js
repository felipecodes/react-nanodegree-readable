import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, editPostAsync, removePostAsync, createPost } from '../../actions'
import View from './View'

class AdminPage extends Component {
  state = {
    values: {},
    errors: {}
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)

    if (this.props.values) {
      this.setState({
        ...this.state,
        values: { ...this.props.values }
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.values && nextProps.values.id !== this.props.values.id) {
      this.setState({
        ...this.state,
        values: { ...nextProps.values }
      })
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    // is edit page
    if (/^\/admin\/edit\/post\//.test(this.props.location.pathname)) {
      return this.props.editPost(this.state.values)
    }

    // is create page
    if (/^\/admin\/add\/post\//.test(this.props.location.pathname)) {
      this.props.createPost(this.state.values)
    }
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(
  (state, props) => ({
    values: state.posts.byId[props.match.params.id] || {}
  }),
  dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    editPost: post => dispatch(editPostAsync(post)),
    createPost: post => dispatch(createPost(post)),
    removePost: post => dispatch(removePostAsync(post))
  })
)(AdminPage)
