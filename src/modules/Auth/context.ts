import { createContext } from 'react'

export interface IAuthContext {
  isAuth: boolean
  auth: IAuthentication
}

const AuthContext = createContext<IAuthContext>(null!)
const { Provider, Consumer } = AuthContext

export default AuthContext
export { Provider as AuthProvider, Consumer as AuthConsumer }
