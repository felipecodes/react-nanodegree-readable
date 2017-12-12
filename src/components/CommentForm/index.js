import React, { Component } from 'react'
import uuid from 'uuid/v1'
import View from './View'

class CommentForm extends Component {
  state = CommentForm.getInitialValues()

  static getInitialValues() {
    return {
      fields: {
        comment: '',
        user: ''
      },
      errors: {}
    }
  }

  isValid = () => {
    return !!this.state.fields.comment && !!this.state.fields.user
  }

  getErrorsMessageOnChange = (name, value) => {
    if (value) {
      delete this.state.errors[name]
      return this.state.errors
    }

    return {
      ...this.state.errors,
      [name]: `The ${name} field is required!`
    }
  }

  getErrorMessages = () => {
    const errors = Object.create(null)
    if (!this.state.fields.comment) {
      errors.comment = 'The comment field is required!'
    }

    if (!this.state.fields.user) {
      errors.user = 'The user field is required!'
    }

    return errors
  }

  getFieldErrorMessage = name => {
    const error = Object.create(null)
    if (!this.state.fields[name]) {
      error[name] = `The ${name} field is required!`
    }
    return error
  }

  getMessageObject = () => ({
    id: uuid(),
    timestamp: new Date().getTime(),
    body: this.state.fields.comment,
    author: this.state.fields.user,
    parentId: this.props.post.id,
    deleted: false,
    voteScore: 1
  })


  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [name]: value
      },
      errors: this.getErrorsMessageOnChange(name, value)
    })
  }

  handleBlur = event => {
    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        ...this.getFieldErrorMessage(event.target.name)
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isValid()) {
      this.props.addComment(this.getMessageObject())
      return this.setState(CommentForm.getInitialValues())
    }

    this.setState({
      ...this.state,
      errors: this.getErrorMessages()
    })
  }

  render() {
    return (
      <View
        {...this.state}
        addComment={this.props.addComment}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
      />
    )
  }
}

export default CommentForm
