import React from 'react'

const Controls = props => (
  <div>
    <button
      onClick={() => props.edit(props.post)}
    >
      Edit
    </button>

    <button
      onClick={() => props.remove(props.post)}
    >
      Remove
    </button>
  </div>
)

export default Controls
