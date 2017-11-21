import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BoxTitle from '../common/BoxTitle'

const Wrapper = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`
const CustomLink = styled(Link)`
  display: inline-block;
  padding: 16px;
  width: 100%;
  text-decoration: none;
  color: #000000de;
`

export { Wrapper, CustomLink }
