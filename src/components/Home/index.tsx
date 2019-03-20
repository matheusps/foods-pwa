import React from 'react'
import Auth from '../Auth'

interface Props {
  auth: Auth
}

const Home = ({ auth }: Props) => (
  <div className="container">
    {auth.isAuthenticated() ? (
      <h4>You are logged in!</h4>
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

export default Home
