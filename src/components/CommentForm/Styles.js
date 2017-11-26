import { RaisedButton } from 'material-ui'
import styled from 'styled-components'
import BoxTitle from '../common/BoxTitle'

const Title = BoxTitle.extend`
  font-weight: 900;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

const SubmitButton = styled(RaisedButton)`
  margin-top: 16px;
`
export { Form, SubmitButton, Title }
