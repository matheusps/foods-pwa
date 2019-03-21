import React from 'react'
import { render } from 'react-testing-library'
import Landing from '../../pages/Landing'
import { AuthProvider } from '../../modules/Auth'

describe('App Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <Landing />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
