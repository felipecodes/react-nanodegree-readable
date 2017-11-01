import React from 'react'

const Category = ({
  category,
  onClick
}) => (
  <li onClick={onClick}>
    {category.name}
  </li>
)

const Categories  = ({
  categories,
  fetchPosts
}) => (
  !!categories.length && (
    <ul>
      {categories.map(category => (
        <Category
          key={category.name}
          category={category}
          onClick={() => fetchPosts(category)}
        />
      ))}
    </ul>
  )
)

const CategoryList = props => {
  return (
    <div>
      <h1>CategoryList</h1>
      <Categories {...props} />
    </div>
  )
}

export default CategoryList
