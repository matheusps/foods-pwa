import React from 'react'
import { render } from 'react-testing-library'
import { AuthProvider } from '../../modules/Auth'
import SettingsPage from '../Settings'

describe('Settings Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <SettingsPage />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
