import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import styledNormalize from 'styled-normalize'
import base from './styles/base'
import App from './containers/App'
import configureStore from './store/configureStore'

injectGlobal`
  ${styledNormalize}
  ${base}
`

const store = configureStore()

render(
	<Router>
		<App store={store} />
	</Router>,
	document.getElementById('root')
)
