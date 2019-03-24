import React from 'react'
import { render } from 'react-testing-library'
import LandingPage from '../../pages/Landing'
import { AuthProvider } from '../../modules/Auth'

describe('Landing Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
