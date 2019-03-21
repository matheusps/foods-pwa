import React from 'react'
import ProtectedPage from '../../components/ProtectedPage'

import './style.css'
import LogoutBtn from '../../components/LogoutBtn'

const Home = () => {
  return (
    <ProtectedPage>
      <h1>App home</h1>
      <LogoutBtn />
    </ProtectedPage>
  )
}

export default Home
