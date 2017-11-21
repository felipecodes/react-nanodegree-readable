import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
  padding: 1em 2em;
  margin-bottom: 2em;
  background-color: #333;
  color: #fff;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1em;
  color: #fff;
`

const Header = () => (
  <Wrapper>
    <StyledLink to={'/'}>Readable</StyledLink>
  </Wrapper>
)

export default Header
