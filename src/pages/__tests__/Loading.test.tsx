import React from 'react'
import { render } from 'react-testing-library'
import { AuthProvider } from '../../modules/Auth'
import LoadingPage from '../../pages/Loading'

describe('Loading Page', () => {
  it('should match snapshot', () => {
    const component = render(
      <AuthProvider>
        <LoadingPage />
      </AuthProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
