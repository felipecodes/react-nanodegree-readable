import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'
import Header from '../components/Header'
import HomePage from './HomePage'

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Header />
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/:category'} component={HomePage} />
      </div>
    </MuiThemeProvider>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
