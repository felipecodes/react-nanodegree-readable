import styled from 'styled-components'
import Box from '../../components/common/Box'
import BoxTitle from '../../components/common/BoxTitle'
import Text from '../../components/common/Text'

const BoxStyles = Box.extend`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
`

const TitleStyles = BoxTitle.extend`
  display: inline-block;
  font-weight: 900;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

const Footer = styled.footer`
  margin-top: 16px;
`

const VoteScore = Text.extend`
  color: red;
`

const StyledBox = BoxStyles.withComponent('article')

const StyledTitle = TitleStyles.withComponent('h1')

export { StyledBox, StyledTitle, Header, Footer, Text, VoteScore }
