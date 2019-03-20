import { Routes } from 'universal-router'

const routes: Routes<any, any> = [
  {
    path: '/',
    action: () => import('./pages/App'),
  },
  {
    path: '/home',
    action: () => import('./pages/Home'),
  },
  {
    path: '/callback',
    action: () => import('./pages/Callback'),
  },
]

export default routes
