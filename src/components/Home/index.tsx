import React, { useContext, Fragment } from 'react'
import Auth from '../Auth'
import { AuthContext } from '../../contexts/AuthContext'

const Home = () => {
  const { auth } = useContext(AuthContext)

  return (
    <div className="container">
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
