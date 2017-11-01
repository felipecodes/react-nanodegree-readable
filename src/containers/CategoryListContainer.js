import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import { fetchCategories, fetchPosts } from '../actions'

class CategoryListContainer extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    return <CategoryList {...this.props} />
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPosts: ({ name }) => dispatch(fetchPosts(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)

