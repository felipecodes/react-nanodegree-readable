import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Wrap from '../components/Wrap'
import Header from '../components/Header'
import HomePage from './HomePage'

const App = ({ store }) => (
  <Provider store={store}>
    <Wrap>
      <Header />
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/:category'} component={HomePage} />
    </Wrap>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
