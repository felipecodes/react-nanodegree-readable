import React from 'react'
import { RaisedButton } from 'material-ui'

const buttonStyle = {
  height: '30px',
  lineHeight: '30px',
  fontSize: '14px',
  color: '#fff'
}

const Controls = props => (
  <div>
    <RaisedButton
      buttonStyle={buttonStyle}
      primary
      onClick={() => props.openCommentForm()}
    >
      Edit
    </RaisedButton>

    <RaisedButton
      buttonStyle={buttonStyle}
      secondary
      onClick={() => props.removeComment(props.comment)}
    >
      Remove
    </RaisedButton>
  </div>
)

export default Controls
