import React from 'react'

import { Link } from '../modules/Router'
import LoginBtn from '../components/LoginBtn'

const Landing = () => {
  return (
    <div>
      <h1>This is a beautiful landing page</h1>
      <Link href="/home">Go to home</Link>
      <LoginBtn />
    </div>
  )
}

export default Landing
