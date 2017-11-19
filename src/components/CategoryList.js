import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const CategoryList = props => (
  <div>
    <h1>CategoryList</h1>
    {props.categories.length && (
      <ul>
        {props.categories.map(category => (
          <li key={category.path}>
            <Link to={`${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default CategoryList
