import { createContext } from 'react'

export interface IAuthContext {
  isAuth: boolean
  auth: Authentication
}

const AuthContext = createContext<IAuthContext>(null!)
const { Provider, Consumer } = AuthContext

export { AuthContext, Provider as AuthProvider, Consumer as AuthConsumer }
