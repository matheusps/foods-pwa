import React from 'react'
import { render } from 'react-testing-library'
import App from '../../pages/Landing'
import { AuthProvider } from '../../contexts/AuthContext'
import AuthService from '../../services/Auth.service'

describe('App Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider value={{ isAuth: true, auth: AuthService }}>
        <App />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
