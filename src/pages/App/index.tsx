import React, { useEffect, useContext } from 'react'

import './style.css'
import AuthContext from '../../contexts/AuthContext'
import { Link } from '../../components/Router'

const App = () => {
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    localStorage.getItem('isLoggedIn') === 'true' && auth.renewSession()
  }, [])

  return (
    <div className="app">
      <Link href="/home">Go home</Link>
      {auth.isAuthenticated() ? (
        <button onClick={() => auth.logout()}>Logout</button>
      ) : (
        <button onClick={() => auth.login()}>Login</button>
      )}
    </div>
  )
}

export default App
