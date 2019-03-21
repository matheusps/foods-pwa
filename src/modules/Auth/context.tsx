import React, { createContext } from 'react'
import AuthService from './service'

export const AuthContext = createContext<IAuthContext>(null!)
const { Provider, Consumer } = AuthContext

const AuthProvider = ({ children }: any) => (
  <Provider value={{ auth: AuthService }}>{children}</Provider>
)

export default AuthContext
export { AuthProvider, Consumer as AuthConsumer }
