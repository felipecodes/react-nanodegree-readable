import styled from 'styled-components'
import Text from '../common/Text'
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

const Item = styled.li`
  margin-top: 16px;
`

const VoteScore = Text.extend`
  margin-left: 8px;
`

const Input = styled.input`
  display: block;
  color: #333;

  ${({ readOnly }) => readOnly && (
    'border: none;'
  )}
`

export { Box, StyledTitle, List, Item, VoteScore, Input }
