import React, { useEffect } from 'react'
import { History } from 'history'

import Auth from '../Auth'

import './style.css'

interface Props {
  history: History
  auth: Auth
}

const App = ({ history, auth }: Props) => {
  const goTo = (route: string) => history.replace(`/${route}`)

  useEffect(() => {
    localStorage.getItem('isLoggedIn') === 'true' && auth.renewSession()
  }, [])

  return (
    <div className="app">
      <button onClick={() => goTo('home')}>Go Home</button>
      {auth.isAuthenticated() ? (
        <button onClick={() => auth.logout()}>Logout</button>
      ) : (
        <button onClick={() => auth.login()}>Login</button>
      )}
    </div>
  )
}

export default App
