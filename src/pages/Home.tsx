import React from 'react'

import { FlexContainer } from '../components/Styleguide'
import { useAuth } from '../modules/Auth'

const HomePage = () => {
  const { logout } = useAuth()
  return (
    <FlexContainer className="h-100 w-100 flex">
      <h1>App home</h1>
      <button onClick={logout} />
    </FlexContainer>
  )
}

export default HomePage
