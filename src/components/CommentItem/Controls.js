import React from 'react'
import styled from 'styled-components'
import { RaisedButton } from 'material-ui'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import IconWrapper from './IconWrapper'

const buttonStyle = {
  height: '30px',
  lineHeight: '30px',
  fontSize: '14px',
  color: '#fff'
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Controls = props => (
  <Wrapper>
    <RaisedButton
      primary
      buttonStyle={buttonStyle}
      onClick={() => props.openCommentForm()}
    >
      Edit
    </RaisedButton>

    <RaisedButton
      secondary
      buttonStyle={buttonStyle}
      onClick={() => props.removeComment(props.comment)}
    >
      Remove
    </RaisedButton>

    <IconWrapper onClick={() => props.voteUpComment(props.comment)}>
      <ThumbUp
        style={{
          width: '16px',
          color: '#08b135'
        }}
      />
    </IconWrapper>
    <IconWrapper onClick={() => props.voteDownComment(props.comment)}>
      <ThumbDown
        style={{
          width: '16px',
          color: '#e02100'
        }}
      />
    </IconWrapper>
  </Wrapper>
)

export default Controls
