import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'
import Header from '../components/Header'
import HomePage from './HomePage'
import PostDetails from './PostDetails'
import AdminPage from './AdminPage'

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Header />
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/:category'} component={HomePage} />
        <Route exact path={'/:category/:id'} component={PostDetails} />
        <Route exact path={'/admin/edit/post/:id'} component={AdminPage} />
        <Route exact path={'/admin/add/post'} component={AdminPage} />
      </div>
    </MuiThemeProvider>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
