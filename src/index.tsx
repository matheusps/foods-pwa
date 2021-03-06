import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './modules/Auth'
import { history, Router } from './modules/Router'
import themes from './themes'
import routes from './routes'

import * as serviceWorker from './serviceWorker'

import './index.css'
import 'tachyons/css/tachyons.css'
import LoadingPage from './pages/Loading'
import Wrapper from './pages/Wrapper'
import { StoreProvider } from './state'

const Root = () => (
  <AuthProvider>
    <StoreProvider>
      <ThemeProvider theme={themes.light}>
        <Router
          history={history}
          routes={routes}
          fallback={<LoadingPage />}
          Wrapper={Wrapper}
        />
      </ThemeProvider>
    </StoreProvider>
  </AuthProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
