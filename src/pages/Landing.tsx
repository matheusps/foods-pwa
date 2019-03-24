import React from 'react'

import { Link } from '../modules/Router'
import LoginBtn from '../components/LoginBtn'

const LandingPage = () => {
  return (
    <div>
      <h1>This is a beautiful landing page</h1>
      <Link href="/home">Go to home</Link>
      <LoginBtn />
    </div>
  )
}

export default LandingPage
