import React from 'react'
import { MoonLoader } from 'react-spinners'

import Container from '../../components/Container'

const LoadingPage = () => {
  return (
    <Container full justify="center" items="center">
      <MoonLoader />
    </Container>
  )
}

export default LoadingPage
