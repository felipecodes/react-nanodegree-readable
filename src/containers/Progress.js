import { connect } from 'react-redux'
import Progress from '../components/Progress'

export default connect(state => ({
  isFetching: !!state.fetch.length
}), null)(Progress)
