import React from 'react'
import {
  Form,
  FormRow,
  ErrorMessage,
  Input,
  Textarea,
  Label,
  SubmitButton
} from './Styles'

const View = props => (
  <Form onSubmit={props.handleSubmit}>
    <FormRow>
      <Label id={'user'}>Username</Label>
      <Input
        name={'user'}
        type={'text'}
        placeholder={'Type your username...'}
        value={props.fields.user}
        danger={!!props.errors.user}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      {!!props.errors.user && (
        <ErrorMessage>{props.errors.user}</ErrorMessage>
      )}
    </FormRow>

    <FormRow>
      <Label id={'comment'}>Comentário</Label>
      <Textarea
        name={'comment'}
        value={props.fields.comment}
        placeholder={'Type your comment...'}
        danger={!!props.errors.comment}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      {!!props.errors.comment && (
        <ErrorMessage>{props.errors.comment}</ErrorMessage>
      )}
    </FormRow>

    <SubmitButton type={'submit'} label={'Enviar'} primary />
  </Form>
)

export default View
