import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './modules/Auth'
import { StoreProvider } from './state'
import { history, Router } from './modules/Router'

import LoadingPage from './pages/Loading'
import PagesWrapper from './pages/PagesWrapper'

import themes from './themes'
import routes from './routes'

import './index.css'
import 'tachyons/css/tachyons.css'

import * as serviceWorker from './serviceWorker'

const Root = () => (
  <AuthProvider>
    <StoreProvider>
      <ThemeProvider theme={themes.light}>
        <Router
          history={history}
          routes={routes}
          fallback={<LoadingPage />}
          Wrapper={PagesWrapper}
        />
      </ThemeProvider>
    </StoreProvider>
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.register()
