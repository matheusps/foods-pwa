import React from 'react'
import { render } from 'react-testing-library'
import { AuthProvider } from '../../modules/Auth'
import Home from '../Home'

describe('Home Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <Home />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
