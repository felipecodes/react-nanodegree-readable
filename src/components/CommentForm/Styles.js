import { RaisedButton } from 'material-ui'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;
`

const ErrorMessage = styled.span`
  color: #ec0000;
  font-size: 14px;
`

const Input = styled.input`
  padding: 8px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  font-size: 14px;
  color: #444;

  &:focus {
    outline: none;
  }

  ${({ danger }) => danger && (
    'border-color: red;'
  )}
`

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  font-size: 14px;
  color: #444;

  &:focus {
    outline: none;
  }

  ${({ danger }) => danger && (
    'border-color: red;'
  )}
`

const Label = styled.label`
  margin-bottom: 6px;
`

const SubmitButton = styled(RaisedButton)`
  margin-top: 16px;
`
export { Form, FormRow, ErrorMessage, Input, Textarea, Label, SubmitButton }
