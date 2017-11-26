import React from 'react'

const View = props => (
  <form onSubmit={props.handleSubmit}>
    <textarea
      name={'comment'}
      value={props.fields.comment}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />
    {!!props.errors.comment && (
      <span>{props.errors.comment}</span>
    )}

    <input
      name={'user'}
      type="text"
      value={props.fields.user}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />
    {!!props.errors.user && (
      <span>{props.errors.user}</span>
    )}

    <button>submit</button>
  </form>
)

export default View
