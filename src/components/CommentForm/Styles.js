import { RaisedButton } from 'material-ui'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

const SubmitButton = styled(RaisedButton)`
  margin-top: 16px;
`
export { Form, SubmitButton }
