import React from 'react'
import styled from 'styled-components'
import { LinearProgress } from 'material-ui'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const Progress = ({ isFetching }) => (
  isFetching ? (
    <Wrapper>
      <LinearProgress mode="indeterminate" />
    </Wrapper>
  ) : null
)

export default Progress
