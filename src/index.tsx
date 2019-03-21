import React from 'react'
import ReactDOM from 'react-dom'

import { AuthProvider } from './modules/Auth'
import { history, Router } from './modules/Router'
import routes from './routes'

import * as serviceWorker from './serviceWorker'

import './index.css'

const Root = () => (
  <AuthProvider>
    <Router
      history={history}
      routes={routes}
      fallback={<div>Loading...</div>}
    />
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
