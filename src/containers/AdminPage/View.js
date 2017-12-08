import React, { Component } from 'react'
import PropTypes from 'prop-types'

const View = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input
        name={'title'}
        value={props.values.title}
        onChange={props.handleChange}
      />
      <textarea
        name={'body'}
        value={props.values.body}
        onChange={props.handleChange}
      />
      <button>submit</button>
    </form>
  </div>
)

View.propTypes = {
  values: PropTypes.object
}

export default View
