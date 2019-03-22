import { Routes } from 'universal-router'
import { AuthService } from './modules/Auth'

const shieldRoute = (pageUrl: string, redirectTo: string = './pages/Landing') =>
  AuthService.isAuthenticated() ? import('' + pageUrl) : import('' + redirectTo)

const authenticate = () => {
  let location = window.location.hash
  if (/access_token|id_token|error/.test(location)) {
    AuthService.handleAuthentication()
  }
}

const routes: Routes<any, any> = [
  {
    path: '/',
    action: () => import('./pages/Landing'),
  },
  {
    path: '/home',
    action: () => import('./pages/Home'),
  },
  {
    path: '/callback',
    action: () => {
      authenticate()
      return import('./pages/Loading')
    },
  },
]

export default routes
