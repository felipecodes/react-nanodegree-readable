import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { RaisedButton } from 'material-ui'

const rootStyle = { width: '100%' }
const inputStyle = { fontSize: '14px' }
const buttonStyle = {
  height: '30px',
  lineHeight: '30px',
  fontSize: '14px',
  color: '#fff'
}

class Form extends Component {
  state = { errors: {} }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.value) {
      return this.setState({
        ...this.state,
        errors: {
          comment: 'The comment is required!'
        }
      })
    }

    this.props.editComment({
      ...this.props.comment,
      body: this.state.value,
      timestamp: new Date().getTime()
    })
    this.props.closeCommentForm()
  }

  componentWillMount() {
    this.setState({ value: this.props.comment.body })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value && this.state.errors.comment) {
      this.setState({
        ...this.state,
        errors: {}
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          multiLine
          style={rootStyle}
          inputStyle={inputStyle}
          name={'comment'}
          value={this.state.value}
          errorText={this.state.errors.comment}
          danger={!!this.state.errors.comment}
          floatingLabelText={'Edit your comment...'}
          onChange={this.handleChange}
        />

        <RaisedButton type={'submit'} buttonStyle={buttonStyle} label="Save" primary />
      </form>
    )
  }
}

export default Form
