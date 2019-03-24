import React from 'react'

import Container from '../components/Styleguide/Container'
import LogoutBtn from '../components/LogoutBtn'

const HomePage = () => {
  return (
    <Container className="h-100 w-100 flex">
      <h1>App home</h1>
      <LogoutBtn />
    </Container>
  )
}

export default HomePage
