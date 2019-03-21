import React, { useContext, Fragment } from 'react'
import { AuthContext } from '../../modules/Auth'

import './style.css'

const Home = () => {
  const { auth } = useContext(AuthContext)
  return (
    <div className="home">
      {auth.isAuthenticated() ? (
        <Fragment>
          <h4>You are logged in!</h4>
          <button onClick={() => auth.logout()}>Logout</button>
        </Fragment>
      ) : (
        <h4>
          You are not logged in! Please{' '}
          <a style={{ cursor: 'pointer' }} onClick={() => auth.login()}>
            Log In
          </a>{' '}
          to continue.
        </h4>
      )}
    </div>
  )
}

export default Home
