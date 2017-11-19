import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { fetchPosts } from '../actions'

const mapStateToProps = ({ posts: { byId, allIds } }, { match }) => {
  const ids = match.params.category ?
    allIds.filter(id => byId[id].category === match.params.category) : allIds

  return {
    posts: ids.map(id => byId[id])
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
