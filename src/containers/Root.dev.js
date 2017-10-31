import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import Header from '../components/Header'
import PostListContainer from './PostListContainer'
import CategoryListContainer from './CategoryListContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <Route exact path="/" render={() => ([
        <CategoryListContainer key="category" />,
        <PostListContainer key="post" />
      ])} />
      <Route exact path="/:category" render={({ location: { pathname } }) => ([
        <CategoryListContainer key="category" />,
        <PostListContainer
          key="post"
          category={pathname.replace('/', '')} />
      ])} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
