import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Categories  = ({
  categories,
  fetchPosts
}) => (
  !!categories.length && (
    <ul>
      {categories.map(category => (
        <li key={category.path}>
          <Link to={`${category.path}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  )
)

class CategoryList extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <h1>CategoryList</h1>
        <Categories {...this.props} />
      </div>
    )
  }
}

export default CategoryList
