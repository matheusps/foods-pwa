import React from 'react'
import ReactDOM from 'react-dom'

import history from './history'
import routes from './routes'
import { Router } from './components/Router'

import * as serviceWorker from './serviceWorker'

import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import AuthService from './services/Auth.service'
import authConfig from './config'

const auth = new AuthService(authConfig)

const Root = () => (
  <AuthProvider value={{ isAuth: false, auth: auth }}>
    <Router
      history={history}
      routes={routes}
      fallback={<div>Loading...</div>}
    />
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
