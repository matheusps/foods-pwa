import React from 'react'

import useRouter from '../../hooks/useRouter'
import { HistoryProvider } from '../../contexts/HistoryContext'

const Router = ({ routes, history, fallback }: IRouter) => {
  const Component = useRouter(routes, history)
  return (
    <HistoryProvider value={history}>
      <React.Suspense fallback={fallback}>
        <Component />
      </React.Suspense>
    </HistoryProvider>
  )
}

export default Router
