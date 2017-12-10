import styled from 'styled-components'
import Box from '../../components/common/Box'
import BoxTitle from '../../components/common/BoxTitle'
import Text from '../../components/common/Text'

export const BoxStyles = Box.extend`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
`

export const TitleStyles = BoxTitle.extend`
  display: inline-block;
  font-weight: 900;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Footer = styled.footer`
  margin-top: 16px;
`

export const VoteWrapper = styled.div`
  display: flex;
`

export const VoteScore = Text.extend`
  margin-left: 1em;
  color: red;
`

export const StyledBox = BoxStyles.withComponent('article')

export const StyledTitle = TitleStyles.withComponent('h1')
