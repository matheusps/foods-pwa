import React from 'react'
import { render } from 'react-testing-library'
import { AuthProvider } from '../../modules/Auth'
import HomePage from '../Home'

describe('Home Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
