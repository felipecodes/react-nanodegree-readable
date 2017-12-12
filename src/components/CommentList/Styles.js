import styled from 'styled-components'
import BoxTitle from '../common/BoxTitle'

const Box = styled.section`
`

const StyledTitle = styled(BoxTitle)`
  font-weight: 900;
`

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`

export { Box, StyledTitle, List }
