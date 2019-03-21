import React from 'react'
import ReactDOM from 'react-dom'

import { history, Router } from './modules/Router'
import routes from './routes'

import * as serviceWorker from './serviceWorker'

import './index.css'
import { AuthProvider, AuthService } from './modules/Auth'

const Root = () => (
  <AuthProvider value={{ isAuth: false, auth: AuthService }}>
    <Router
      history={history}
      routes={routes}
      fallback={<div>Loading...</div>}
    />
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
