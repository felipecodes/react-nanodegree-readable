import { connect } from 'react-redux'
import CategoryList from '../components/CategoryList'
import { fetchCategories } from '../actions'

const mapStateToProps = ({ categories }) => ({
  categories: categories
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

