import { Routes } from 'universal-router'

const routes: Routes<any, any> = [
  {
    path: '/',
    action: () => import('./components/App'),
  },
  {
    path: '/home',
    action: () => import('./components/Home'),
  },
  {
    path: '/callback',
    action: () => import('./components/Callback'),
  },
]

export default routes
