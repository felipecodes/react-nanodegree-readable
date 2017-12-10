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
      onClick={() => props.editPost(props.post)}
    >
      Edit
    </RaisedButton>

    <RaisedButton
      buttonStyle={buttonStyle}
      secondary
      onClick={() => {
        props.removePost(props.post)
        props.history.push('/')
      }}
    >
      Remove
    </RaisedButton>
  </div>
)

export default Controls
