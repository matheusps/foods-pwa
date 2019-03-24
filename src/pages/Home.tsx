import React from 'react'

import Container from '../components/Styleguide/Container'
import { useAuth } from '../modules/Auth'

const HomePage = () => {
  const { logout } = useAuth()
  return (
    <Container className="h-100 w-100 flex">
      <h1>App home</h1>
      <button onClick={logout} />
    </Container>
  )
}

export default HomePage
