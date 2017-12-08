import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, editPostAsync, removePostAsync, createPost } from '../../actions'
import View from './View'

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      values: {},
      errors: {},
      open: false
    }
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

  handleRequestClose = () => {
    this.setState({
      ...this.state,
      open: false
    })
  }

  isValid = () => {
    return this.state.values.title && this.state.values.body
  }

  getErrors = () => {
    const errors = Object.create(null)

    if (!this.state.values.title) {
      errors.title = 'title is required'
    }

    if (!this.state.values.body) {
      errors.body = 'body is required'
    }

    return errors
  }

  getFieldError = ({ name, value }) => {
    return { [name]: value ? '' : `${name} is required` }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      touched: true,
      errors: {
        ...this.state.errors,
        ...this.getFieldError(event.target)
      },
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.touched) {
      return
    }

    if (!this.isValid()) {
      return this.setState({
        ...this.state,
        errors: this.getErrors()
      })
    }

    this.setState({ open: true })

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
        handleRequestClose={this.handleRequestClose}
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
