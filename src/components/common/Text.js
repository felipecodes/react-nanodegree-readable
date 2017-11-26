import styled from 'styled-components'

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;

  ${({ inline }) => inline && (
    'display: inline;'
  )}
`

export default Text
