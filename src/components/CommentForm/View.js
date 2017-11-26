import React from 'react'
import { TextField } from 'material-ui'
import { Form, SubmitButton } from './Styles'

const rootStyle = { width: '100%' }
const inputStyle = { fontSize: '14px' }

const View = props => (
  <Form onSubmit={props.handleSubmit}>
    <TextField
      style={rootStyle}
      inputStyle={inputStyle}
      name={'user'}
      type={'text'}
      floatingLabelText={'Type your username...'}
      value={props.fields.user}
      errorText={props.errors.user}
      danger={!!props.errors.user}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />

    <TextField
      multiLine
      style={rootStyle}
      inputStyle={inputStyle}
      name={'comment'}
      value={props.fields.comment}
      floatingLabelText={'Type your comment...'}
      errorText={props.errors.comment}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />

    <SubmitButton type={'submit'} label={'Enviar'} primary />
  </Form>
)

export default View
