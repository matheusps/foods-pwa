import React from 'react'

import { Link } from '../modules/Router'
import { useAuth } from '../modules/Auth'

const LandingPage = () => {
  const { login } = useAuth()
  return (
    <div>
      <h1>This is a beautiful landing page</h1>
      <Link href="/home">Go to home</Link>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LandingPage
