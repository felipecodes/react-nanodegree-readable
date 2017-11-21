import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
`

const Column = styled.div`
  width: calc(${({ width }) => width || 100}% - 16px);
  margin-right: 8px;
  margin-left: 8px;
`

export { Grid, Column }
