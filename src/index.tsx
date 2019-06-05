import React from 'react'
import ReactDOM from 'react-dom'
import {} from 'apollo-boost'

import { AuthProvider } from './modules/Auth'
import { history, Router } from './modules/Router'

import LoadingPage from './pages/Loading'
import PagesWrapper from './pages/PagesWrapper'

import routes from './routes'

import './index.css'
import 'tachyons/css/tachyons.css'

import * as serviceWorker from './serviceWorker'

const Root = () => (
  <AuthProvider>
    <Router
      history={history}
      routes={routes}
      fallback={<LoadingPage />}
      Wrapper={PagesWrapper}
    />
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.register()
