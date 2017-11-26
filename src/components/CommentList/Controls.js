import React from 'react'

const Controls = props => (
  <div>
    <button
      onClick={() => props.editComment(props.comment)}
    >
      Edit
    </button>

    <button
      onClick={() => props.removeComment(props.comment)}
    >
      Remove
    </button>
  </div>
)

export default Controls
