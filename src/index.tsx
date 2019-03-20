import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, RouteComponentProps } from 'react-router-dom'

import App from './components/App'
import Auth from './components/Auth'
import Home from './components/Home'
import Callback from './components/Callback'
import history from './history'
import * as serviceWorker from './serviceWorker'

import './index.css'

const auth = new Auth()

const handleAuthentication = ({ location }: RouteComponentProps) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

const Root = () => (
  <Router history={history}>
    <Fragment>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
      <Route path="/home" render={props => <Home auth={auth} {...props} />} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props)
          return <Callback />
        }}
      />
    </Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
